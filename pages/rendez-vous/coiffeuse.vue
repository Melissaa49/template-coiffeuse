<template>
  <section class="page">
    <StepIndicator :step="2" />

    <h1>Avec qui souhaitez-vous vivre ce moment ?</h1>

    <div class="list">
      <StylistCard
        name="Léa Deschamps"
        role="Coloriste – Balayage"
        image="/stylists/lea.jpg"
      />

      <StylistCard
        name="Julia Martin"
        role="Spécialiste coupe et soin"
        image="/stylists/julia.jpg"
      />

      <StylistCard
        name="Emma Lefèvre"
        role="Experte balayage"
        image="/stylists/emma.jpg"
      />
    </div>

    <PrimaryButton @click="$router.push('/rendez-vous/date')">
      Continuer
    </PrimaryButton>
  </section>
</template>

<style scoped>
.page {
  padding: 48px 20px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 32px 0;
}
</style>
