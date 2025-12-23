<template>
  <section class="page">
    <h1>Prendre rendez-vous</h1>
    <p class="subtitle">Entrez dans une parenthèse de bien-être.</p>

    <PrimaryButton @click="$router.push('/rendez-vous/service')">
      Commencer
    </PrimaryButton>
  </section>
</template>

<style scoped>
.page {
  padding: 64px 24px;
  text-align: center;
}

.subtitle {
  margin: 16px 0 32px;
  color: var(--text-soft);
}
</style>
