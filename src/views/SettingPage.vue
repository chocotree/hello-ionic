<script setup lang="ts">
  import BasePageLayout from '@/components/layout/BasePageLayout.vue';
  import { useDarkMode } from '@/composable/useDarkMode';
  import { moon, sunny } from 'ionicons/icons';

  const { isDarkMode, toggleDarkMode } = useDarkMode();
</script>

<template>
  <BasePageLayout>
    <template #pageTitle>設定</template>
    <div class="px-[15px] pt-[20px]">
      <IonButton @click="() => toggleDarkMode()" color="dark">
        <IonIcon v-if="isDarkMode" :icon="sunny" />
        <IonIcon v-else :icon="moon" />
      </IonButton>
    </div>
  </BasePageLayout>
</template>
