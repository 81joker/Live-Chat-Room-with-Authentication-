<template>
    <div class="home">
      <h1>Real Time</h1>
      <!-- <div v-if="error" class="text-red-800">{{ error }}</div> -->
      <div v-for="message in messagess" :key="message" class="my-6 bg-gray-200">
        <h3 class="font-bold">{{ message.name }}</h3>
        <p>{{ message.message }}</p>
      </div>
    </div>
  </template>

  <script>
  import { projectFirestore } from "@/firebase/config";
  import { ref } from "vue";
  import {useRouter} from 'vue-router'
  export default {
    setup() {
      const messagess = ref([]);
      projectFirestore
        .collection("messages")
        .orderBy("createdAt", "desc")
        .onSnapshot((snap) => {
          let docs = snap.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          messagess.value = docs;
          // console.log(messagess.value);
        });
        const router = useRouter()


      return { messagess };
    },
  };
  </script>

  <style>
  </style>