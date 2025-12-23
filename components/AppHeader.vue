<template>
  <header class="header">
    <nav class="nav">
      <div class="links">
        <a href="#lieu">Le lieu</a>
        <a href="#experience">Expérience</a>
        <a href="/prestations">Prestations</a>
      </div>

      <button class="cta-nav">
        Prendre<br />rendez-vous
      </button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding-top: 18px;
  pointer-events: none;
}

/* Nav posée directement sur le fond */
.nav {
  width: calc(100% - 40px);
  max-width: 420px;
  margin: 0 auto;
  pointer-events: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
}

.links {
  display: flex;
  gap: 22px;
  font-size: 15px;
  color: var(--text-main);
}

.links a {
  color: var(--text-main);
  text-decoration: none;
}

.cta-nav {
  padding: 10px 16px;
  border-radius: 14px;
  font-size: 14px;
  line-height: 1.05;
  background: var(--button-bg);
  color: var(--button-text);
  border: none;
}
</style>

<style scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding-top: 18px;
  pointer-events: none;
}

/* Nav posée directement sur le fond */
.nav {
  width: calc(100% - 40px);
  max-width: 420px;
  margin: 0 auto;
  pointer-events: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;
}

.links {
  display: flex;
  gap: 22px;
  font-size: 15px;
  color: var(--text-main);
}

.links a {
  color: var(--text-main);
  text-decoration: none;
}

.cta-nav {
  padding: 10px 16px;
  border-radius: 14px;
  font-size: 14px;
  line-height: 1.05;
  background: var(--button-bg);
  color: var(--button-text);
  border: none;
}
</style>
