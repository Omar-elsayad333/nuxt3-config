import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const isDev = process.env.NODE_ENV === 'development'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  experimental: {
    localLayerAliases: true,
  },

  app: {
    // global transition
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'ar',
      },
    },
  },

  modules: [
    '@nuxtjs/i18n',
    'nuxt-swiper',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  i18n: {
    baseUrl: 'http://localhost:3000',
    locales: [
      { code: 'ar', file: 'ar.json', iso: 'ar-AR', name: 'Arabic' },
      { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
    ],
    defaultLocale: 'ar',
    langDir: 'locales/',
    strategy: 'prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'lang',
    }, // if you are using custom path, default
  },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    ssr: {
      noExternal: ['ant-design-vue'],
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    define: {
      // fixed apollo client err
      __DEV__: isDev.toString(),
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/app.scss" as *;',
        },
      },
    },
    esbuild: isDev
      ? {}
      : {
          pure: !isDev ? ['console.log', 'console.warn', 'debugger'] : [],
          legalComments: 'none',
        },
  },
})
