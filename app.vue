<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
import { watch, onBeforeMount } from 'vue'

const { locale } = useI18n()

onBeforeMount(() => {
    useHead({
        htmlAttrs: {
            lang: locale.value,
            dir: locale.value === 'en' ? 'ltr' : 'rtl'
        }
    })
})

watch(locale, (newValue) => {
    useHead({
        htmlAttrs: {
            lang: newValue,
            dir: newValue === 'en' ? 'ltr' : 'rtl'
        }
    })
})

</script>