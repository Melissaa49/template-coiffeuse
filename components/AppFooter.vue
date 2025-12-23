<template>
  <footer class="footer">
    <p class="links">
      <a href="/mentions-legales">Mentions légales</a>
      ·
      <a href="/politique-confidentialite">Politique de confidentialité</a>
    </p>

    <p class="copyright">
      © {{ year }} — Tous droits réservés
    </p>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer {
  padding: 36px 16px 42px;
  text-align: center;

  background: var(--beige-dark); /* 🔑 beige plus foncé */
  border-top: 1px solid rgba(122,106,88,0.15);
}



/* Liens légaux */
.links {
  font-size: 13.5px;
  margin-bottom: 10px;
}

.footer a {
  color: #7a6a58;
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.footer a:hover {
  opacity: 0.7;
}

/* Copyright discret */
.copyright {
  font-size: 12.5px;
  color: #9a8b7a;
  letter-spacing: 0.4px;
}
</style>
