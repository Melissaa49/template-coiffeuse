export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      title: 'Salon Monbel',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, viewport-fit=cover'
        },
        {
          name: 'description',
          content: 'Prenez rendez-vous dans un écrin de bien-être.'
        }
      ]
    }
  },

  css: [
    '~/assets/css/main.css'
  ],

  typescript: {
    strict: true
  }
})
