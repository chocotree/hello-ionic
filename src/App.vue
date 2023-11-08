<script setup lang="ts">
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
  import DarkModeProvider from '@/provider/DarkModeProvider.vue';
</script>

<template>
  <IonApp>
    <DarkModeProvider>
      <IonRouterOutlet />
    </DarkModeProvider>
  </IonApp>
</template>
