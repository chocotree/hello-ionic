<script setup lang="ts">
  const checkIsCurrentDark = () => {
    return document.documentElement.classList.contains('dark');
  };

  const isDarkMode = ref(checkIsCurrentDark());

  const toggleDarkMode = () => {
    const isDark = checkIsCurrentDark();
    isDarkMode.value = !isDark;

    if (isDark) {
      document.documentElement.classList.remove('dark');
      return;
    }

    document.documentElement.classList.add('dark');
  };

  provide('isDarkMode', isDarkMode);
  provide('toggleDarkMode', toggleDarkMode);
</script>

<template>
  <slot></slot>
</template>
