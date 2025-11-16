<template>
  <div>
    <!-- ... -->
  </div>
</template>

<script setup lang="ts">
// ...
import { fileOpenedHandler, openHandler } from '@renderer/utils/openFile'
import { fileSavedHandler, saveAsHandler, saveHandler } from '@renderer/utils/saveAsFile'

...

const fileSaved = ref(true)
const filePath = ref('')
const htmlContent = ref('')
const markdownContent = ref('')

//...

onMounted(() => {
  // ...
  window.addEventListener('sindri-open-file', openHandler)
  window.addEventListener(
      'sindri-file-opened',
      fileOpenedHandler(markdownContent, htmlContent, filePath) as EventListener
  )

  window.addEventListener(
      'sindri-save-file',
      saveHandler(filePath, markdownContent)
  )
  window.addEventListener(
      'sindri-save-as-file',
      saveAsHandler(markdownContent)
  )
  window.addEventListener(
      'sindri-file-saved',
      fileSavedHandler(fileSaved) as EventListener
  )
})

onUnmounted(() => {
  // ...
  window.removeEventListener('sindri-open-file', openHandler)
  window.removeEventListener(
      'sindri-file-opened',
      fileOpenedHandler(markdownContent, htmlContent) as EventListener
  )

  window.removeEventListener(
      'sindri-save-file',
      saveHandler(filePath, markdownContent)
  )
  window.removeEventListener(
      'sindri-save-as-file',
      saveAsHandler(markdownContent)
  )
  window.removeEventListener(
      'sindri-file-saved',
      fileSavedHandler(fileSaved) as EventListener
  )
})
</script>
