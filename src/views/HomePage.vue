<script setup lang="ts">
  import BasePageLayout from '@/components/layout/BasePageLayout.vue';
  import NoteCard from '@/components/NoteCard/index.vue';
</script>

<template>
  <BasePageLayout>
    <template #pageTitle>我的日記</template>
    <div class="w-full px-[15px] pt-[20px]">
      <ul class="w-full">
        <li v-for="i in 10" :key="i" class="w-full mb-[15px]">
          <NoteCard>{{ i }}</NoteCard>
        </li>
      </ul>
    </div>
  </BasePageLayout>
</template>
