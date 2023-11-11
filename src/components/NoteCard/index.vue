<script setup lang="ts">
  import { NOTE_CONTENT_PAGE } from '@/config/constants';
  import { useIonRouter } from '@ionic/vue';

  const ionRouter = useIonRouter();

  const openNoteContent = () => {
    console.log('openNoteContent');
    ionRouter.push(NOTE_CONTENT_PAGE + `/${1}`);
  };
</script>

<template>
  <div class="w-full h-[80px] border border-gray-200 rounded-[6px] px-[12px] py-[8px]" @click="openNoteContent">
    <slot></slot>
  </div>
</template>
