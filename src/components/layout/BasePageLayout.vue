<script setup lang="ts">
  import { IonFooter } from '@ionic/vue';
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <div class="flex h-full i-center px-[15px]">
          <h1 class="text-[18px] text-primary-default font-bold">
            <slot name="pageTitle"></slot>
          </h1>
        </div>
      </IonToolbar>
    </IonHeader>

    <IonContent :fullscreen="true">
      <div class="w-full h-full overflow-y-auto no-scrollbar">
        <!-- 
          default slot
         -->
        <slot></slot>
      </div>
    </IonContent>

    <IonFooter>
      <IonContent>
        <p>footer</p>
      </IonContent>
    </IonFooter>
  </IonPage>
</template>
