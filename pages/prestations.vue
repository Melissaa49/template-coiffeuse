<template>
  <main class="prestations-page">

    <!-- HERO -->
    <section class="prestations-hero">
      <img src="/images/hero-salon2.png" alt="Le salon" />
    </section>

    <!-- CONTENU -->
    <section class="prestations-content">
      <h1>Les prestations</h1>
      <p class="intro">
        Des soins pensés avec attention,<br />
        pour révéler la beauté de vos cheveux.
      </p>

      <div class="prestations-grid">
        <div class="presta-card">
          <h3>Shampooing & brushing</h3>
          <p>Soin doux et brushing naturel</p>
          <span>45 €</span>
        </div>

        <div class="presta-card">
          <h3>Coupe sur mesure</h3>
          <p>Écoute, conseil et coupe adaptée</p>
          <span>65 €</span>
        </div>

        <div class="presta-card">
          <h3>Coloration éclat</h3>
          <p>Teinte personnalisée et soin profond</p>
          <span>85 €</span>
        </div>

        <div class="presta-card highlight">
          <h3>Rituel soin</h3>
          <p>Détente, massage & soin réparateur</p>
          <span>55 €</span>
        </div>
      </div>

      <button class="cta-secondary">
        Prendre rendez-vous
      </button>
    </section>

  </main>
</template>

<style scoped>
/* =========================
   PAGE PRESTATIONS
========================= */

.prestations-page {
  background: #fffaf4;
}

/* =========================
   HERO
========================= */

.prestations-hero img {
  width: 100%;
  display: block;
}

/* =========================
   CONTENU
========================= */

.prestations-content {
  max-width: 420px;
  margin: 0 auto;
  padding: 56px 20px 96px;
  text-align: center;
}

.prestations-content h1 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.8px;
  margin-bottom: 12px;
}

.prestations-content .intro {
  font-size: 14.5px;
  line-height: 1.8;
  color: var(--text-soft);
  margin-bottom: 40px;
}

/* =========================
   GRILLE PRESTATIONS
========================= */

.prestations-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 48px;
}

/* =========================
   CARTE
========================= */

.presta-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 18px 16px;
  text-align: left;

  box-shadow: 0 6px 14px rgba(0,0,0,0.06);
}

.presta-card h3 {
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 6px;
}

.presta-card p {
  font-size: 13px;
  color: var(--text-soft);
  margin-bottom: 10px;
}

.presta-card span {
  font-size: 16px;
  font-weight: 500;
  color: #6f5a44;
}

/* Mise en avant */
.presta-card.highlight {
  background: #f2e4d4;
}
</style>
