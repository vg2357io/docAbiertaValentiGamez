<template>
  <div>
    <!-- ... -->
  </div>
</template>

<script setup lang="ts">
// ...

const htmlContent = ref('')
const markdownContent = ref('')

//...

onMounted(() => {
  // ...
  window.addEventListener('sindri-open-file', openHandler)
  window.addEventListener(
      'sindri-file-opened',
      fileOpenedHandler(markdownContent, htmlContent) as EventListener
  )
})

onUnmounted(() => {
  // ...
  window.removeEventListener('sindri-open-file', openHandler)
  window.removeEventListener(
      'sindri-file-opened',
      fileOpenedHandler(markdownContent, htmlContent) as EventListener
  )
})
</script>
