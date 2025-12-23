<template>
  <div class="card" :class="{ selected }" @click="$emit('select')">
    <img :src="image" />
    <p>{{ title }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image: string
  selected?: boolean
}>()
</script>

<style scoped>
.card {
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  text-align: center;
  padding-bottom: 8px;
}

.selected {
  outline: 2px solid var(--beige-dark);
}

img {
  width: 100%;
  height: 120px;
  object-fit: cover;
}
</style>
