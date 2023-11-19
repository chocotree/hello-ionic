export class DarkModeVM {
  private checkIsCurrentDark() {
    return document.documentElement.classList.contains('dark');
  }

  isDarkMode = ref(this.checkIsCurrentDark());

  toggleDarkMode() {
    const isDark = this.checkIsCurrentDark();
    this.isDarkMode.value = !isDark;

    if (isDark) {
      document.documentElement.classList.remove('dark');
      return;
    }

    document.documentElement.classList.add('dark');
  }
}
