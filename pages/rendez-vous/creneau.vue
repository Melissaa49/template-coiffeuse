<template>
  <section class="page">
    <StepIndicator :step="4" />

    <h1>Choisissez un créneau</h1>

    <div class="slots">
      <TimeSlot time="09h30" />
      <TimeSlot time="10h00" />
      <TimeSlot time="11h00" />
      <TimeSlot time="14h00" />
      <TimeSlot time="15h30" />
      <TimeSlot time="16h00" />
    </div>

    <PrimaryButton @click="$router.push('/rendez-vous/confirmation')">
      Confirmer
    </PrimaryButton>
  </section>
</template>

<style scoped>
.page {
  padding: 48px 20px;
}

.slots {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 32px 0;
}
</style>
