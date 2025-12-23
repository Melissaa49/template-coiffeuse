<template>
  <div class="stylist" :class="{ selected }" @click="$emit('select')">
    <img :src="image" />
    <div>
      <h3>{{ name }}</h3>
      <p>{{ role }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  role: string
  image: string
  selected?: boolean
}>()
</script>

<style scoped>
.stylist {
  display: flex;
  gap: 12px;
  background: #fff;
  border-radius: 16px;
  padding: 12px;
}

.selected {
  outline: 2px solid var(--beige-dark);
}

img {
  width: 64px;
  height: 64px;
  border-radius: 12px;
  object-fit: cover;
}
</style>
