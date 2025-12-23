<template>
  <section class="prestations" id="prestations">
    <header class="prestations-header">
      <h2>Les prestations</h2>
      <p>
        Des soins pensés avec attention,<br />
        pour révéler la beauté de vos cheveux.
      </p>
    </header>

    <div class="prestations-grid">
      <div class="prestation-card">
        <h3>Shampooing & brushing</h3>
        <p>Soin doux et brushing naturel</p>
        <span class="price">45 €</span>
      </div>

      <div class="prestation-card">
        <h3>Coupe sur mesure</h3>
        <p>Écoute, conseil et coupe adaptée</p>
        <span class="price">65 €</span>
      </div>

      <div class="prestation-card">
        <h3>Coloration éclat</h3>
        <p>Teinte personnalisée et soin profond</p>
        <span class="price">85 €</span>
      </div>

      <div class="prestation-card signature">
        <h3>Rituel soin</h3>
        <p>Détente, massage & soin réparateur</p>
        <span class="price">55 €</span>
      </div>
    </div>

    <!-- 🔑 BOUTON TRANSITION -->
    <button class="cta-transition">
      Prendre rendez-vous
    </button>
  </section>
</template>


<style scoped>
/* =========================
   PRESTATIONS – HOME
========================= */

.prestations {
  position: relative;
  padding: 72px 20px 120px;

  background:
    linear-gradient(
      to bottom,
      #f3e6d8 0%,
      #f7efe6 40%,
      #f9f4ee 100%
    );

  text-align: center;
}

/* =========================
   HEADER
========================= */

.prestations-header h2 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.9px;
  margin-bottom: 14px;
}

.prestations-header p {
  font-size: 14.5px;
  line-height: 1.8;
  color: var(--text-soft);
  margin-bottom: 40px;
}

/* =========================
   GRID
========================= */

.prestations-grid {
  max-width: 420px;
  margin: 0 auto 32px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

/* =========================
   CARD
========================= */

.prestation-card {
  background: #fffaf4;
  border-radius: 22px;
  padding: 20px 18px;
  text-align: left;

  box-shadow: 0 10px 24px rgba(0,0,0,0.08);
}

.prestation-card h3 {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
}

.prestation-card p {
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--text-soft);
  margin-bottom: 14px;
}

.prestation-card .price {
  font-size: 16px;
  font-weight: 500;
  color: #6f5a44;
}

/* Carte signature */
.prestation-card.signature {
  background: #efe1cf;
}

/* =========================
   BOUTON TRANSITION (clé)
========================= */

.cta-transition {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  padding: 14px 32px;
  border-radius: 22px;

  background: #ead3b8;   /* ✅ beige chaud demandé */
  color: #6f5a44;

  font-size: 14px;
  letter-spacing: 0.7px;
  font-weight: 400;

  border: 1px solid rgba(111,90,68,0.18);
  box-shadow: 0 10px 22px rgba(0,0,0,0.12);

  z-index: 5;
}

</style>
