<template>

        <div style="margin: auto; width: 600px">
          <form @submit.prevent="handleSubmit">
            <h3>Login</h3>
            <div>
              <label for="email" position="fixed">Email:</label>
              <input type="email" name="email" v-model="email" required/>
            </div>
            <div>
              <label for="email" position="fixed">Password:</label>
              <input
                type="password"
                name="password"
                v-model="password"
                required
             />
            </div>

            <button type="submit">Login</button>
            <button @click="ionRouter.back()">CANCEL</button>
            <div v-if="error">{{ error }}</div>
          </form>
        </div>
</template>

<script setup lang="ts">

import useAuth from "~/store/user-auth";
useHead({
  title: "Nuxt - Login",
});

const ionRouter = useRouter();
const auth = useAuth();

const email = ref("");
const password = ref("");
const error = ref("");

/**
 *
 */
const handleSubmit = async () => {
  try {
    await auth.login({
      email: email.value,
      password: password.value,
    });
    
    setTimeout(() => {
      ionRouter.replace("/home");
    }, 100);
  } catch (err) {
    error.value = (err as Error).message;
  }
};
</script>
