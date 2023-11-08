export const useDarkMode = () => {
  const isDarkMode = inject('isDarkMode') as Ref<boolean>;
  const toggleDarkMode = inject('toggleDarkMode') as () => void;

  return {
    isDarkMode,
    toggleDarkMode,
  };
};
