<template>
  <section class="experience" id="experience">
    <div class="experience-content">
<h2>
  Un lieu pensé<br />
  pour ralentir
</h2>

<p>
  Un espace calme.<br />
  Une attention sincère.<br />
  Une expérience pensée pour vous.
</p>


      <div class="circles">
        <div class="circle circle-left"></div>
        <div class="circle circle-right"></div>
      </div>

          <button class="cta-transition">
        Découvrir le salon
      </button>

    </div>
  </section>
</template>

<style scoped>
.experience {
  position: relative;


  /* FOND PAPIER PLEIN ÉCRAN */
  background: url('/images/bg-paper-3.png') no-repeat center top / cover;
}

/* CONTENU CENTRÉ */
.experience-content {
  max-width: 420px;
  margin: 0 auto;
  padding: 72px 24px;

  border-radius: 36px;
  text-align: center;
}

/* TEXTE */
.experience h2 {
  font-size: 24px;
  line-height: 1.5;
  margin-bottom: 22px;
}

.experience p {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text-soft);
  margin-bottom: 46px;
}

/* BULLES */
.circles {
  display: flex;
  justify-content: center;
  gap: 26px;
  margin-bottom: 44px;
}

.circle {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 14px 28px rgba(0,0,0,.12);
}

.circle-left {
  background-image: url('/images/gallery-6.png');
  background-position: center 40%;
}

.circle-right {
  background-image: url('/images/gallery-2.png');
  background-position: center center;
}


/* 🔑 BOUTON DE TRANSITION (IDENTITÉ VISUELLE) */
.cta-transition {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  padding: 14px 32px;
  border-radius: 22px;

  background: #ead3b8;       /* beige chaud */
  color: #6f5a44;

  font-size: 14px;
  letter-spacing: 0.7px;
  font-weight: 400;

  border: 1px solid rgba(111,90,68,0.18);
  box-shadow: 0 10px 22px rgba(0,0,0,0.12);

  z-index: 5;
}

</style>
