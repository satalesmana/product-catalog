// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vue: {
    propsDestructure: true,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  plugins: [
    { src: '~/plugins/fetch-api.ts', mode: 'client' },
  ],
  modules: [
    '@pinia/nuxt',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/utils/_media.scss" as *;',
        },
      },
    },
  },
})
