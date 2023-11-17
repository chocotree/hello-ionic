<script setup lang="ts">
  import BasePageLayout from '@/components/layout/BasePageLayout.vue';
  import NoteEditor from '@/components/NoteEditor/index.vue';
  import { HOME_PAGE } from '@/config/constants';
  import { useIonRouter } from '@ionic/vue';

  const ionRouter = useIonRouter();

  const goHome = () => {
    ionRouter.replace(HOME_PAGE);
  };
</script>

<template>
  <BasePageLayout>
    <template #pageTitle>新增筆記</template>

    <div class="px-[15px] pb-[40px]">
      <NoteEditor :onSubmitSuccess="goHome" />
    </div>
  </BasePageLayout>
</template>
