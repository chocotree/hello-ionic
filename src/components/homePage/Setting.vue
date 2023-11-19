<script setup lang="ts">
  import { moon, sunny, logIn } from 'ionicons/icons';
  import { useAppStore } from '@/stores';
  import { useIonRouter } from '@ionic/vue';
  import { LOGIN_PAGE } from '@/config/constants';

  const { appStore } = useAppStore();
  const { darkModeVM } = appStore.getDarkModeVM();
  const ionRouter = useIonRouter();
</script>

<template>
  <div class="w-full h-full overflow-y-auto no-scrollbar px-[15px] pt-[20px]">
    <IonButton @click="() => darkModeVM.toggleDarkMode()" color="dark">
      <IonIcon v-if="darkModeVM.isDarkMode.value" :icon="sunny" />
      <IonIcon v-else :icon="moon" />
    </IonButton>

    <div>
      <IonButton color="dark" @click="() => ionRouter.push(LOGIN_PAGE)">
        <IonIcon :icon="logIn" />
        <span class="inline-block ml-[12px]">登入</span>
      </IonButton>
    </div>
  </div>
</template>
