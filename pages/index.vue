<template>
  <v-text-field label="Label"></v-text-field>
  <v-form v-if="!loading" @submit="onSubmit">
    <v-text-field v-model="email" placeholder="email" v-bind="emailAttrs" :error="!!errors.email"
      :error-messages="errors.email && $t(errors.email)" />
    <v-text-field v-model="github" placeholder="github" v-bind="githubAttrs" :error="!!errors.github"
      :error-messages="errors.github" />
    <button>{{ state ? 'omar' : 'ahmed' }}</button>
  </v-form>
  <button @click="testFetch">{{ state ? 'omar' : 'ahmed' }}</button>
</template>

<script setup>
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { ref } from 'vue'

const loading = ref(false)
// const { data: res } = await useFetch('https://aljoodmed-b.geexar.dev/api/v1/web/products')
const { data: res, pending, error, refresh } = await useAsyncData(
  'mountains',
  async () => {
    try {
      loading = true
      await $fetch('https://aljoodmed-b.geexar.dev/api/v1/web/products')
    }
    catch (error) {
      console.log(error)
    } finally {
      loading = false
    }
  }
)
//  () => $fetch('https://aljoodmed-b.geexar.dev/api/v1/web/categories')

console.log(res)

const testFetch = async () => {
  const { data: res } = await useFetch('https://aljoodmed-b.geexar.dev/api/v1/web/products')
  console.log(res)
}

const state = ref(true)
const schema = yup.object({
  email: yup.string().required().email(),
  github: yup.string().required(),
})

const { handleSubmit, defineField, errors } = useForm({
  validationSchema: schema,
})
const onSubmit = handleSubmit(
  (values) => {
    console.log(values)
  },
  (error) => {
    console.log(error)
  },
)

const [email, emailAttrs] = defineField('email')
const [github, githubAttrs] = defineField('github')
</script>

<style scoped></style>
