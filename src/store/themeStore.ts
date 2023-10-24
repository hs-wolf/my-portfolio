import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    darkMode: true,
  }),
  actions: {
    getThemeOnLoad() {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.toggleDarkMode(true)
        return
      }
      this.toggleDarkMode(false)
    },
    toggleDarkMode(value?: boolean) {
      this.darkMode = value ?? !this.darkMode;
      if (this.darkMode) {
        document.documentElement.classList.add("dark")
        localStorage.theme = 'dark'
        return
      }
      document.documentElement.classList.remove("dark")
      localStorage.theme = 'light'
    },
  },
});
