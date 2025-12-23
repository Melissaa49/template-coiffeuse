<template>
  <section class="hero" id="lieu">
    <div class="hero-media">
      <img
      :src="heroImage"
      alt="Salon"
      class="hero-image"
    />

      <button class="cta-primary">
        Prendre rendez-vous
      </button>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
const heroImage = `${config.app.baseURL}images/hero-salon.png`
</script>


<style scoped>
.hero {
  padding-top: 100px;
  text-align: center;

  background: url('/images/bg-paper-pampa.png') no-repeat center top / 100% auto;
}

/* CONTENEUR DE RÉFÉRENCE */
.hero-media {
  position: relative;
}

/* IMAGE */
.hero-image {
  width: 100%;
  display: block;
}
.cta-primary {
  position: absolute;
  left: 50%;
  bottom: 0;                 /* 🔑 pied exact de l’image */
  transform: translate(-50%, 50%);

  border-radius: 22px;

  background: #ead3b8;       /* beige chaud */
  color: #6f5a44;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.7px;

  border: 1px solid rgba(111,90,68,0.18);
  box-shadow: 0 6px 14px rgba(0,0,0,0.10);

  z-index: 10;
}


</style>
