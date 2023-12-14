<template>
    <div>
        <form>
            <NuxtLink :to="switchLocalePath('en')">en</NuxtLink>
            <br />
            <NuxtLink :to="switchLocalePath('ar')">ar</NuxtLink>

            <p>{{ $t('hello') }}</p>
            <nuxt-link :to="localePath('/test')">test</nuxt-link>

        </form>
    </div>
</template>

<script setup>
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()

</script>

<style lang="scss" scoped>
.test-component {
    color: $secondary
}
</style>