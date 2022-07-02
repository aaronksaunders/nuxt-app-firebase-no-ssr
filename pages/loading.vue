<template>
  <IonApp>
    <IonPage>
      <ion-content class="ion-padding">
        <div v-if="loading">LOADING...</div>
      </ion-content>
    </IonPage>
  </IonApp>
</template>

<script setup lang="ts">


import useAuth from "~~/store/user-auth";

definePageMeta({
  alias: ["/", "/loader"],
});

debugger;

const ionRouter = useRouter();
const userAuth = useAuth();
const loading = ref(true);

watch(() => userAuth.authIsReady, (authReady) => {
  if (authReady) {
    ionRouter.push( userAuth.user ?  "/home" : "/login" );
    loading.value=false;
  }
});
</script>
