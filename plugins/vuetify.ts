import { createVuetify } from 'vuetify'
import { darkTheme } from '@/assets/themes/darkTheme'
import { lightTheme } from '@/assets/themes/lightTheme'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    defaults: {},
    // add theme
    // theme: {
    //   defaultTheme: 'lightTheme',
    //   themes: {
    //     light: lightTheme,
    //     dark: darkTheme,
    //   },
    // },
  })

  app.vueApp.use(vuetify)
})
