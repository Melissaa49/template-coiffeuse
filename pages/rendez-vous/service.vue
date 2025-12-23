<template>
  <section class="page">
    <StepIndicator :step="1" />

    <h1>Que souhaitez-vous réserver ?</h1>

    <div class="grid">
      <ServiceCard title="Coupe" image="/services/coupe.jpg" />
      <ServiceCard title="Brushing" image="/services/brushing.jpg" />
      <ServiceCard title="Soin" image="/services/soin.jpg" />
      <ServiceCard title="Coloration" image="/services/coloration.jpg" />
    </div>

    <PrimaryButton @click="$router.push('/rendez-vous/coiffeuse')">
      Continuer
    </PrimaryButton>
  </section>
</template>

<style scoped>
.page {
  padding: 48px 20px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin: 32px 0;
}
</style>
