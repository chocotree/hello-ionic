<script setup lang="ts">
  import { onMounted } from 'vue';

  onMounted(() => {
    console.log('layout mounted');
  });
</script>

<template>
  <slot></slot>
</template>
