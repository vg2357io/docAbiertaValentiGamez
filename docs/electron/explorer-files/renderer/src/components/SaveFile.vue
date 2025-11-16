<template>
  <a
    class="font-medium text-sm cursor-pointer"
    @click="emitSaveEvent"
  >
    Guardar
  </a>
</template>

<script setup lang="ts">
function emitSaveEvent(): void {
  window.dispatchEvent(new CustomEvent('sindri-save-file'))
}
</script>

<style scoped></style>
