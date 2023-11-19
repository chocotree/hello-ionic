<script setup lang="tsx">
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Scrollbar } from 'swiper/modules';
  import { onIonViewDidEnter } from '@ionic/vue';
  import { useAppStore } from '@/stores';

  const { appStore } = useAppStore();
  const { swiperTabVM } = appStore.getSwiperTabVM();
  const barDom = ref(null);

  /**
   * 確保頁面跳轉回來，swiper ui 呈現正常
   */
  onIonViewDidEnter(() => {
    swiperTabVM.update();
  });
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
      <div class="w-full h-full overflow-hidden">
        <Swiper
          :modules="[Scrollbar]"
          :scrollbar="{
            el: barDom,
          }"
          :threshold="5"
          :speed="200"
          class="h-full"
          @swiper="(sw) => swiperTabVM.onInitSwiper(sw)"
        >
          <SwiperSlide v-for="item in swiperTabVM.pageTabList" :key="item.key">
            <component :is="item.component" />
          </SwiperSlide>
        </Swiper>
      </div>
    </IonContent>

    <IonFooter>
      <IonToolbar>
        <!-- 
          1. h-[40px]
          height should match customIonic.css
          
          ion-footer ion-toolbar {
            --min-height: 40px;
          }

          2. home_footer
          customize swiper-scrollbar css
         -->
        <div class="realtive w-full h-[40px] grid grid-cols-3 text-black home_footer">
          <div
            v-for="(item, i) in swiperTabVM.pageTabList"
            :key="item.key"
            class="w-full h-full flex-center flex-col"
            @click="swiperTabVM.slideTo(i)"
          >
            <p class="m-0 p-0">{{ item.label }}</p>
          </div>

          <div ref="barDom" class="swiper-scrollbar"></div>
        </div>
      </IonToolbar>
    </IonFooter>
  </IonPage>
</template>
