<template>
  <button class="slot" :class="{ selected }" @click="$emit('select')">
    {{ time }}
  </button>
</template>

<script setup lang="ts">
defineProps<{ time: string; selected?: boolean }>()
</script>

<style scoped>
.slot {
  width: 100%;
  padding: 14px;
  background: #fff;
  border-radius: 12px;
}

.selected {
  background: var(--beige-dark);
}
</style>
