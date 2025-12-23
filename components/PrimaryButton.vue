<template>
  <button class="primary">
    <slot />
  </button>
</template>

<style scoped>
.primary {
  width: 100%;
  margin: 16px 0;
  background: var(--button-bg);
}
</style>
