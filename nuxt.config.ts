// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ["~/assets/styles.css"],
  modules: ['@nuxt/image', "@nuxtjs/cloudinary"],
  
})


