<template>
  <v-theme-provider tag="main" with-background class="pa-10">
    <v-locale-provider fallback-locale="ar" :locale="locale" :rtl="locale === 'ar'">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-locale-provider>
  </v-theme-provider>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { watch, onBeforeMount } from 'vue'

const theme = useTheme()
const { locale } = useI18n()

const toggleTheme = () => {
  theme.global.name.value = theme.global.name.value === 'darkTheme' ? 'lightTheme' : 'darkTheme'
}

useHead({
  title: 'Nuxt 3 Config',
  meta: [{ name: 'description', content: 'My amazing site.' }],
})

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Siteomar',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about itomar.',
  ogImage:
    'https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgxNDY5NjY1NzY1MjQ0/most-beautiful-places-in-the-world-4-jpeg.webp',
  twitterCard: 'summary_large_image',
})

onBeforeMount(() => {
  useHead({
    htmlAttrs: {
      lang: locale.value,
      dir: locale.value === 'en' ? 'ltr' : 'rtl',
    },
  })
})

watch(locale, (newValue) => {
  useHead({
    htmlAttrs: {
      lang: newValue,
      dir: newValue === 'en' ? 'ltr' : 'rtl',
    },
  })
})
</script>
