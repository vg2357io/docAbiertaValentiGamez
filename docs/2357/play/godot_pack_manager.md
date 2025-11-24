# Informe: Sistema de Gestión Dinámica de Packs en Godot Web

## 1. Objetivo
Permitir que un proyecto de **Godot Web** cargue y libere **packs (.pck)** bajo demanda mediante un **orquestador en JavaScript**, optimizando la memoria (WASM heap) y el almacenamiento local (IndexedDB/OPFS), con capacidad de **prefetch predictivo** y **descarga progresiva** desde una API externa.

---

## 2. Arquitectura General
```
[ API Externa: manifest.json , /packs/{id}-{ver}.pck ]
           ↓ fetch + checksum/etag
[ JS Orchestrator ] ── IndexedDB/OPFS ── (persistencia local)
       │                               │
       ├─ Prefetch Queue (prioridades)
       ├─ LRU Cache (gestión de cuota)
       ├─ Bridge (window.godotLoadPck / godotInstantiate / godotFree)
       │
   [ Godot Web Runtime ]
       ├─ Monta packs y escenas bajo demanda
       ├─ Libera instancias cuando no se usan
       └─ Reporta telemetría al JS central
```

---

## 3. Componentes Clave

### 3.1 JavaScript Orchestrator
Responsable de:
- Descargar packs vía fetch (API externa).
- Almacenarlos en **IndexedDB** u **OPFS**.
- Gestionar la cola de **prefetch** y **LRU purge**.
- Ordenar la carga y descarga según las necesidades del juego o predicciones.
- Comunicar a Godot qué packs instanciar o liberar.

### 3.2 Godot Bridge (GDScript)
Responsable de:
- Recibir desde JS los bytes de un pack (`ArrayBuffer`).
- Guardarlos en `user://` y montarlos con `ProjectSettings.load_resource_pack()`.
- Instanciar escenas bajo demanda (`PackedScene.instantiate()`).
- Liberar instancias y limpiar referencias (`queue_free`).
- Reportar uso de memoria o escena activa al orquestador JS.

---

## 4. Manifiesto de Packs
Ejemplo de `manifest.json` ofrecido por la API externa:

```json
{
  "packs": [
    {
      "id": "biome_forest",
      "version": "1.4.2",
      "size": 28734111,
      "sha256": "…",
      "etag": "\"abc123\"",
      "entry_scenes": ["res://forest/Start.tscn"],
      "dependencies": ["common_audio@2.0.0"],
      "priority": 80,
      "predict": { "next": ["biome_cave"], "weight": 0.6 }
    }
  ]
}
```

---

## 5. Código Base Sugerido

### 5.1 JavaScript: gestor básico de packs
```js
// IndexedDB para persistir blobs
const DB = await openDB('packs', 1, {
  upgrade(db){ db.createObjectStore('bin'); db.createObjectStore('meta'); }
});

async function ensureResident(pack) {
  if (await DB.get('meta', pack.id)) return;
  const blob = await fetch(pack.url).then(r => r.blob());
  const ab = await blob.arrayBuffer();
  await DB.put('bin', ab, pack.id);
  await DB.put('meta', pack, pack.id);
}

async function mountInGodot(packId) {
  const ab = await DB.get('bin', packId);
  await waitFor(() => window.godotLoadPck);
  window.godotLoadPck(ab);
}

async function instantiateScene(scenePath, params) {
  await waitFor(() => window.godotInstantiate);
  window.godotInstantiate(scenePath, params || null);
}

function waitFor(test) {
  return new Promise(r => {
    const i = setInterval(() => { if (test()) { clearInterval(i); r(); } }, 50);
  });
}
```

### 5.2 GDScript: Autoload Bridge.gd
```gdscript
extends Node
var loaded_instances: Array = []

func _ready():
    if OS.has_feature("web"):
        var w = JavaScriptBridge.get_interface("window")
        w.godotLoadPck = JavaScriptBridge.create_callback(_on_load_pck)
        w.godotInstantiate = JavaScriptBridge.create_callback(_on_instantiate)
        w.godotFreeAll = JavaScriptBridge.create_callback(_on_free_all)

func _on_load_pck(args:Array):
    var bytes:PackedByteArray = args[0]
    var path := "user://mod_" + str(Time.get_ticks_msec()) + ".pck"
    var f = FileAccess.open(path, FileAccess.WRITE)
    f.store_buffer(bytes)
    f.close()
    ProjectSettings.load_resource_pack(path, true)

func _on_instantiate(args:Array):
    var ps:PackedScene = load(String(args[0]))
    if ps:
        var inst = ps.instantiate()
        get_tree().current_scene.add_child(inst)
        loaded_instances.append(inst)

func _on_free_all(args:Array):
    for n in loaded_instances:
        if is_instance_valid(n): n.queue_free()
    loaded_instances.clear()
```

---

## 6. Políticas de Gestión y Rendimiento
- **Packs pequeños** (10–50 MiB) → mejor rendimiento y tolerancia a iOS.
- **Prefetch predictivo**: cargar packs colindantes o próximos según escena actual.
- **LRU**: purgar packs antiguos si el almacenamiento excede la cuota.
- **Integridad**: validar SHA256 o ETag antes de montar.
- **Tolerancia a iOS**: usar OPFS o IndexedDB, asumir posible *eviction* y re-descarga.
- **Monitorización**: Godot puede devolver métricas (memoria, escenas activas) al orquestador JS.

---

## 7. Próximas Extensiones
- Añadir **firma digital** de packs (verificación de integridad).
- API REST para registro y sincronización de packs por usuario.
- **Desmontaje simulado** (limpieza de recursos por pack).
- Analítica de uso y predicción basada en patrones reales del jugador.
- Interfaz de depuración visual del buffer, packs montados y uso de memoria.

