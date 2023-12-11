<template>
    <h1 class="test-style">ahmed</h1>
    <nuxt-link :to="localePath('/')">home</nuxt-link>
    <img src="/images/testImage.jpg" width="200" alt="">
</template>

<script setup>
const localePath = useLocalePath()

</script>
<style lang="scss">
.test-style {
    color: $primary;
}
</style>
