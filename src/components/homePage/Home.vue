<script setup lang="ts">
  import NoteCard from '@/components/NoteCard/index.vue';
</script>

<template>
  <div class="w-full h-full overflow-y-auto no-scrollbar px-[15px] pt-[20px]">
    <ul class="w-full">
      <li v-for="i in 10" :key="i" class="w-full mb-[15px]">
        <NoteCard>{{ i }}</NoteCard>
      </li>
    </ul>
  </div>
</template>
