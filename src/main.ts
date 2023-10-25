import "./assets/css/tailwind.css";
import "./assets/css/main.css";
import "./assets/css/transitions.css";
import 'uno.css'

import App from "./App.vue";
import Router from "./router";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { z } from 'zod'
import { useThemeStore } from "./store/themeStore";

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
const themeStore = useThemeStore(pinia)
themeStore.getThemeOnLoad()
app.use(Router)
app.mount("#app")

z.setErrorMap((issue, ctx) => {
    if (issue.code === z.ZodIssueCode.invalid_type) {
        if (issue.expected === 'string' && issue.received === 'undefined')
            return { message: 'This field is required.' }
    }
    if (issue.code === z.ZodIssueCode.invalid_string) {
        if (issue.validation === 'email')
            return { message: 'This field needs to be a valid e-mail.' }
    }
    if (issue.code === z.ZodIssueCode.too_small) {
        if (issue.type === 'string') {
            if (issue.minimum === 1)
                return { message: 'This field is required.' }
        }
    }
    return { message: ctx.defaultError }
})