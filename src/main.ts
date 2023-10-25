import "./assets/css/tailwind.css";
import "./assets/css/main.css";
import "./assets/css/transitions.css";
import 'uno.css'

import App from "./App.vue";
import Router from "./router";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { useThemeStore } from "./store/themeStore";

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const themeStore = useThemeStore(pinia)
themeStore.getThemeOnLoad()
app.use(Router)
app.mount("#app")
