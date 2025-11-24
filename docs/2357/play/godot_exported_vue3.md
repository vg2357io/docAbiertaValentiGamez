# Opción A — Cargar como `<script>` global (la más fiable)

Usa el `mygame.js` tal y como lo genera Godot y accede a `window.Engine`.

```vue
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)
let game = null

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.src = src
    s.async = true
    s.onload = resolve
    s.onerror = reject
    document.head.appendChild(s)
  })
}

onMounted(async () => {
  // Coloca los ficheros de Godot en /public/godot/
  await loadScript('/godot/mygame.js')          // generado por Godot 4.5
  const Engine = window.Engine                  // quedó global

  const engine = new Engine({
    canvas: canvas.value,                       // tu canvas
    executable: '/godot/mygame',                // sin extensión
    locateFile: (file) => `/godot/${file}`,     // dónde están .wasm/.pck
    canvasResizePolicy: 2                       // ajusta al contenedor
  })

  game = await engine.startGame()
})

onBeforeUnmount(() => {
  if (game?.quit) game.quit()
})
</script>

<template>
  <canvas
      ref="canvas"
      id="canvas"
      class="absolute inset-0 z-50"
      style="width:100%; height:100%;"
  />
</template>
```

# Opción B — Import dinámico como módulo (si tu `mygame.js` exporta ESM)

Algunos exports permiten `import('/godot/mygame.js')`. Si al importar no aparece `Engine`, usa la opción A.

```vue
<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)
let game = null

onMounted(async () => {
  const mod = await import('/godot/mygame.js')  // puede exportar { Engine } o default
  const Engine = mod.Engine || mod.default

  const engine = new Engine({
    canvas: canvas.value,
    executable: '/godot/mygame',
    locateFile: (file) => `/godot/${file}`,
    canvasResizePolicy: 2
  })

  game = await engine.startGame()
})

onBeforeUnmount(() => {
  if (game?.quit) game.quit()
})
</script>

<template>
  <canvas
      ref="canvas"
      id="canvas"
      class="absolute inset-0 z-50"
      style="width:100%; height:100%;"
  />
</template>
```

## Checklist rápido

* Pon **`mygame.js`, `mygame.wasm`, `mygame.pck`** en **`/public/godot/`**.
* El valor de **`executable`** es el *basename* (sin extensión) que coincide con tus `.pck/.wasm`.
* Si exportaste con **Threads**, en `vite.config.ts` añade:

  ```ts
  export default {
    server: {
      headers: {
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Embedder-Policy': 'require-corp',
      }
    }
  }
  ```

  (o reexporta sin threads para evitar estas cabeceras en dev).
* Si **Opción B** da error (por ejemplo “not a module”), usa **Opción A**.
