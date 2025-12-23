<template>
  <div class="steps">
    <span v-for="n in 4" :key="n" :class="{ active: n <= step }"></span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ step: number }>()
</script>

<style scoped>
.steps {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
}

span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ddd;
}

.active {
  background: var(--beige-dark);
}
</style>
