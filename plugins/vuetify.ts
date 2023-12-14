import { createVuetify } from 'vuetify'
import { darkTheme } from '@/assets/themes/darkTheme'
import { lightTheme } from '@/assets/themes/lightTheme'
import { componentsStyle } from '@/assets/themes/components'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'lightTheme',
      themes: {
        lightTheme,
        darkTheme,
      },
    },
    defaults: {
      ...componentsStyle,
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
