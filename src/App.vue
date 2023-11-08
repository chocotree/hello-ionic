<script setup lang="ts">
  import DarkModeProvider from '@/provider/DarkModeProvider.vue';
</script>

<template>
  <IonApp>
    <DarkModeProvider>
      <IonRouterOutlet />
    </DarkModeProvider>
  </IonApp>
</template>
