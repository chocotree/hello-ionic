<script setup lang="ts">
  //
</script>

<template>
  <IonPage>
    <IonHeader :translucent="true">
      <IonToolbar>
        <IonTitle>
          <h1 class="text-[20px] text-primary-default font-bold">
            <slot name="pageTitle"></slot>
          </h1>
        </IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent :fullscreen="true">
      <div class="w-full h-full overflow-y-auto no-scrollbar">
        <IonHeader collapse="condense">
          <IonToolbar>
            <h1 class="text-[20px] text-primary-default font-bold">
              <slot name="pageTitle"></slot>
            </h1>
          </IonToolbar>
        </IonHeader>

        <!-- default slot -->
        <slot></slot>
      </div>
    </IonContent>
  </IonPage>
</template>
