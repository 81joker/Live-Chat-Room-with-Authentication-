<template>
  <div class="container">
    <Navbar />
    <!-- Display NewChat Room -->
    <new-chat-form />
  </div>
  <div v-if="user">
    <p>Hey there XXXXX{{ user.displayName }}</p>
    <p class="email">Currently logged in as {{ user.email }}</p>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import getUser from "../composables/getUser";
import { watch } from "vue";
import { useRouter } from "vue-router";

export default {
  components: { Navbar, NewChatForm },
  setup() {
    const { user } = getUser();
    const router = useRouter();

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