<template>
  <section class="gallery" id="galerie">
    <header class="gallery-header">
      <h2>Galerie</h2>
    </header>

    <div class="gallery-grid">
      <img src="/images/gallery-1.jpeg" alt="Salon" />
      <img src="/images/gallery-5.png" alt="Produits" />
      <img src="/images/gallery-2.png" alt="Coiffure" />
      <img src="/images/gallery-4.png" alt="Détails" />
      <img src="/images/gallery-3.png" alt="Soin" />
      <img src="/images/gallery-6.png" alt="Fauteuil" />
    </div>
  </section>
</template>

<style scoped>
/* =========================
   SECTION GALERIE (HOME)
========================= */

.gallery {
  padding: 72px 16px 96px;
  background: url('/images/bg-paper-pampa.png')
    repeat-y
    center top / 100% auto;
}
/* TITRE */
.gallery-header {
  text-align: center;
  margin-bottom: 40px;
}

.gallery-header h2 {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.9px;
  color: var(--text-main);
}

/* =========================
   GRILLE IMAGES
========================= */

.gallery-grid {
  max-width: 420px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.gallery-grid img {
  width: 100%;
  aspect-ratio: 1 / 1;
  display: block;

  border-radius: 18px;
  object-fit: cover;

  box-shadow: 0 10px 22px rgba(0,0,0,0.10);
}
</style>
