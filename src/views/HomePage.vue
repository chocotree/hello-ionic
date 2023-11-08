<script setup lang="ts">
  import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  import { useDarkMode } from '@/composable/useDarkMode';

  const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<template>
  <IonPage>
    <IonHeader :translucent="true">
      <IonToolbar>
        <IonTitle>Hello App</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Home Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div class="px-[20px]">
        <h1 class="text-[24px] underline">hello tailwind css</h1>

        <IonButton @click="() => toggleDarkMode()">{{ isDarkMode ? 'light' : 'dark' }}</IonButton>
      </div>
    </IonContent>
  </IonPage>
</template>
