<script setup lang="ts">
  import { useIonRouter } from '@ionic/vue';
  import { home, addCircle, settings } from 'ionicons/icons';

  const ionRouter = useIonRouter();
</script>

<template>
  <IonPage>
    <IonTabs>
      <IonRouterOutlet />

      <IonTabBar slot="bottom">
        <div class="w-full h-full grid grid-cols-3 gap-x-[15px]">
          <div class="w-full h-full flex-center flex-col" @click="ionRouter.push('/home')">
            <IonIcon :icon="home" class="w-[20px] h-[20px] mb-[4px]" />
            <p class="m-0 p-0">我的日記</p>
          </div>

          <div class="w-full h-full flex-center flex-col" @click="ionRouter.push('/add')">
            <IonIcon :icon="addCircle" class="w-[20px] h-[20px] mb-[4px]" />
            <p class="m-0 p-0">新增</p>
          </div>

          <div class="w-full h-full flex-center flex-col" @click="ionRouter.push('/setting')">
            <IonIcon :icon="settings" class="w-[20px] h-[20px] mb-[4px]" />
            <p class="m-0 p-0">設定</p>
          </div>
        </div>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>
