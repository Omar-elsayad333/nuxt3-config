<template>
  <div></div>
  <v-text-field label="Label"></v-text-field>
  <v-btn @click="useTest" variant="flat"> test composables </v-btn>
  <test-component />
  <v-form @submit="onSubmit">
    <v-text-field
      v-model="email"
      placeholder="email"
      v-bind="emailAttrs"
      :error="!!errors.email"
      :error-messages="errors.email && $t(errors.email)"
    />
    <v-text-field
      v-model="github"
      placeholder="github"
      v-bind="githubAttrs"
      :error="!!errors.github"
      :error-messages="errors.github"
    />
    <button>{{ state ? 'omar' : 'ahmed' }}</button>
  </v-form>
</template>

<script setup>
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { ref } from 'vue'

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
