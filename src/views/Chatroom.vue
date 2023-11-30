<template>
  <div class="container">
    <Navbar />
    <!-- Display NewChat Room -->
    <new-chat-form />
  </div>
  <div v-if="user">
    <p>Hey there {{ user.displayName }}</p>
    <p class="email">Currently logged in as {{ user.email }}</p>
    <h1>XXX{{ user.emailVerified }}</h1>
  </div>
  <h1>
    <real-time />
  </h1>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import RealTime from "../components/RealTime.vue";
import getUser from "../composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { Navbar, NewChatForm,RealTime },
  setup() {
    const { user } = getUser();
    const router = useRouter();
console.log(user);
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });

    return { user };
  },
};
</script>

<style>
</style>