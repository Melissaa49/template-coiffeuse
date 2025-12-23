<template>
  <section class="page">
    <StepIndicator :step="3" />

    <h1>Sélectionnez une date</h1>

    <div class="box">
      <p>Date choisie</p>
      <input type="date" />
    </div>

    <PrimaryButton @click="$router.push('/rendez-vous/creneau')">
      Continuer
    </PrimaryButton>
  </section>
</template>

<style scoped>
.page {
  padding: 48px 20px;
}

.box {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  margin: 32px 0;
}
</style>
