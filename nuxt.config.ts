import IconsResolver from "unplugin-icons/resolver";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

const isDev = process.env.NODE_ENV === "development";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "nuxt-swiper"],
  i18n: {
    baseUrl: "http://localhost:3000",
    locales: [
      { code: "ar", file: "ar.json", iso: "ar-AR", name: "Arabic" },
      { code: "en", file: "en.json", iso: "en-US", name: "English" },
    ],
    defaultLocale: "ar",
    langDir: "locales/",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
    }, // if you are using custom path, default
  },
  vite: {
    ssr: {
      noExternal: ["ant-design-vue"],
    },
    define: {
      // fixed apollo client err
      __DEV__: isDev.toString(),
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;',
        },
      },
    },
    plugins: [
      Components({
        resolvers: [
          IconsResolver({
            prefix: "Icon",
          }),
          // resolveIcons true will error with NITRO_PRESET=cloudflare
          AntDesignVueResolver({ resolveIcons: true, importStyle: "less" }),
        ],
        dts: "types/components.d.ts",
      }),
    ],
    esbuild: isDev
      ? {}
      : {
          pure: !isDev ? ["console.log", "console.warn", "debugger"] : [],
          legalComments: "none",
        },
  },
});
