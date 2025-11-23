# 📋 Guía para Managers: Creación de Briefings de Arte 3D

Esta guía detalla el proceso que debe seguir el **Project Manager (PM)** para crear tareas de modelado 3D en Jira. Un briefing claro y completo es esencial para evitar iteraciones innecesarias y asegurar que el asset se integre correctamente en el motor.

---

## 1. Creación de la Tarea en Jira

*   **Tipo de Incidencia (Issue Type):** Utiliza **Story** (Historia) para assets complejos o **Task** (Tarea) para assets individuales estándar.
*   **Resumen (Summary):** Debe ser claro y seguir una nomenclatura consistente.
    *   *Formato:* `[Asset] Nombre del Asset`
    *   *Ejemplo:* `[Asset] Muro de Piedra Modular (Esquina)`

---

## 2. El Briefing (Campo Descripción)

El cuerpo de la tarea debe contener tres secciones obligatorias:

### A. Referencias Visuales 🖼️
El modelador no debe adivinar el estilo.
*   **Obligatorio:** Adjuntar Concept Art aprobado o un enlace a la carpeta de referencias en Google Drive.
*   **Ruta Estándar:** `Diseño/Assets3D/<nombre_asset>/Referencias` (según [Generación de Referencias](generacion_referencias.md)).
*   **Nota:** Si se usan referencias de IA o Kenney, especificar claramente qué aspectos tomar (ej. "Usar la paleta de colores de la imagen A y la silueta de la imagen B").

### B. Especificaciones Técnicas ⚙️
Define las restricciones técnicas para asegurar que el asset sea "Game Ready".

*   **Guía de modeladorxs:** Haz referencia a la [Guía de Modeladorxs](https://docs.valentigamez.com/#/colaboradores_vg/modeladorxs_3d/README).
*   **Nomenclatura de Exportación:** Indicar el nombre exacto que debe tener el archivo final.
    *   *Formato:* `tipo_subtipo_variacion` (ej. `wall_stone_corner_01`).
    *   *Referencia:* Ver [Pipeline de Exportación](pipeline_exportacion_validacion.md).
*   **Formato de Entrega:** Archivo `.blend` editable y exportación `.glb` (o `.fbx` si se especifica).

### C. Criterios de Aceptación (Definition of Done) ✅
Lista de verificación que el modelador debe cumplir antes de mover la tarea a "En Revisión". Copia y pega esto en la descripción:

```markdown
**Definition of Done:**
- [ ] Geometría limpia (sin N-gons, sin caras internas).
- [ ] Escala y rotación aplicadas (1,1,1 / 0,0,0).
- [ ] Pivote en la base (Z=0).
- [ ] Nomenclatura correcta (`tipo_subtipo_variacion`).
- [ ] Exportado a .glb y validado en motor (o visor glTF).
- [ ] Archivos subidos al repositorio con la estructura de carpetas correcta y el tag de Jira.
- [ ] Archivos subidos Google Drive con la estructura de carpetas correcta.
```

---

## 3. Priorización y Asignación

*   **Prioridad:** Asigna la prioridad basada en la necesidad del bloqueo de nivel. Los assets estructurales (suelos, paredes) suelen tener prioridad alta.
*   **Etiquetas (Labels):** Usa etiquetas como `3D`, `Environment`, `Prop`, `Character` para facilitar el filtrado en el tablero.

## 4. Promp sugerido para notebook LM

*   Añade toda lo que hay en la raiz de colaboradores_vg y de la carpeta modeladorxs_3d a excepción de los README y los _sidebar.
*   Si lo crees necesario añade imágenes con licencia como referencia del briefing.
*   En el chat de LM añade el siguiente prompt para generar el briefing:

```markdown
Genera un briefing siguiendo la plantilla genérica para cualquier asset 3D que se encuentra en el archivo base_tarea_jira.md:

nombre_del_asset: <nombre_del_asset>
nombre_del_proyecto: <nombre_del_proyecto>
tipo_de_asset: <tipo_de_asset>
motor_o_contexto_de_uso: <motor_o_contexto_de_uso>
característica_1: <característica_1>
característica_2: <característica_2>
característica_3: <característica_3>
documentación_del_modelador: <documentación_del_modelador>
paquete_de_estilo_o_kit_base: <paquete_de_estilo_o_kit_base>
carpeta_de_referencias_visuales: <carpeta_de_referencias_visuales>
ruta_de_destino_del_asset: <ruta_de_destino_del_asset>
prefijo_estándar: <prefijo_estándar>
motor_de_validación: <motor_de_validación>
JIRA-ID: <JIRA-ID>
```
