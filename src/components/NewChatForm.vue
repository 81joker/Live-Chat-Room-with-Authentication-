<template>
  <form>
<textarea v-model="message" @keypress.enter.prevent="handelSubmit">
</textarea>
  </form>
  <div class="error">{{ error }}</div>
</template>

<script>
import { ref } from 'vue'
import getUser from '../composables/getUser'
import { timestamp } from '@/firebase/config'
import useCollection from '../composables/useCollection'


export default {
    setup() {
        const message = ref()
        const { user } = getUser()
        const { addDoc, error } = useCollection('messages')



        const handelSubmit =  async () => {
        const  chat = {
            message: message.value,
            name: user.value.displayName,
            createdAt: timestamp()
          }
          await addDoc(chat)
      if (!error.value) {
        message.value = ''
      }
        }
        return {message ,handelSubmit ,error}
    }
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>