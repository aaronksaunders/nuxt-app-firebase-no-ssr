
<template>
  <IonApp>
    <IonPage>
      <IonHeader>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button />
          </ion-buttons>
          <ion-title>Test Page </ion-title>
        </ion-toolbar>
      </IonHeader>
      <ion-content class="ion-padding">
        <h1>TEST PAGE</h1>
        <ion-button @click="ionRouter.back()">BACK</ion-button>
      </ion-content>
    </IonPage>
  </IonApp>
</template>


<script setup lang="ts">

useHead({
  title: "Nuxt - Test Page",
});

const ionRouter = useRouter();
</script>
