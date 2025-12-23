<template>
  <div class="app-bg">
    <div class="app-mobile">
      <div class="paper">
        <AppHeader />
        <slot />
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<style>
.app-bg {
  min-height: 100vh;
  background: #4b2f34;
  display: flex;
  justify-content: center;
}

.app-mobile {
  width: 100%;
  max-width: 430px;
  overflow: hidden;
}

/* 🔑 LE FOND PAPIER EST ICI, UNE FOIS POUR TOUT */
.paper {
  min-height: 100vh;
  background: none; /* ⛔ PLUS DE DÉCOR ICI */
}

</style>
