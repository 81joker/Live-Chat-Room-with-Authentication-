<template>
    <div class="error">{{ error }}</div>
    <div class="sucess">{{ sucess }}</div>
    <form @submit.prevent="handleSubmit">
      <input type="email" required placeholder="email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Log in</button>
    </form>
  </template>

  <script>
  import { ref } from 'vue'
  import useLogin from '../composables/useLogin'
import { useRouter } from 'vue-router'

  export default {
    setup(props, context) {
      const router = useRouter()
      const { error ,login } = useLogin()
      const sucess = ref()
      // refs
      const email = ref('')
      const password = ref('')

      const handleSubmit = async () => {
        await login(email.value, password.value)
        if (!error.value) {
          // console.log('user Login in');
          sucess.value = 'user Login in'
          context.emit('login')

        }
        router.push({name:'home'})

      }

      return { email, password, error ,handleSubmit ,sucess}
    }
  }
  </script>

  <style>

  </style>