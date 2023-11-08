<script setup lang="ts">
  import { useDarkMode } from '@/composable/useDarkMode';
  import { OnLongPress } from '@vueuse/components';

  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const isLongPress = ref(false);
  const handleLongPress = () => {
    isLongPress.value = true;
  };
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

        <OnLongPress :options="{ delay: 251 }" @trigger="handleLongPress">
          <IonButton>isLongPress: {{ isLongPress }}</IonButton>
        </OnLongPress>
      </div>
    </IonContent>
  </IonPage>
</template>
