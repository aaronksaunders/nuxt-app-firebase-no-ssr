<template>
  <h1>HOME PAGE</h1>
  <h2>{{ userAuth?.user?.email }}</h2>
  <button @click="doLogout">LOGOUT</button>
</template>

<script setup lang="ts">
import useAuth from "~/store/user-auth";

const userAuth = useAuth();
const router = useRouter();
const loading = ref(false);

console.log(userAuth);

useHead({
  title: "Nuxt",
});

definePageMeta({
  middleware: "checkauth",
  alias: ["/home"],
});

/**
 *
 */
const doLogout = async () => {
  loading.value = true;
  await userAuth.logout();
 window.location.href = "/login";
  loading.value = false;
};
</script>
