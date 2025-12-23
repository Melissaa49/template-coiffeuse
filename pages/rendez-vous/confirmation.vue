<template>
  <section class="page">
    <h1>Votre rendez-vous est confirmé</h1>

    <p class="subtitle">
      Votre parenthèse de bien-être vous attend.
    </p>

    <div class="summary">
      <p><strong>Jeudi 2 mai 2024 – 10h00</strong></p>
      <p>Coupe avec Léa Deschamps</p>
      <p>Salon Monbel – Paris</p>
    </div>

    <PrimaryButton @click="$router.push('/')">
      Retour à l’accueil
    </PrimaryButton>
  </section>
</template>

<style scoped>
.page {
  padding: 64px 24px;
  text-align: center;
}

.subtitle {
  margin: 16px 0 24px;
  color: var(--text-soft);
}

.summary {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 32px;
}
</style>
