import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      name: "not-found",
      path: "/:catchAll(.*)",
      redirect: { name: "home" },
    },
  ],
  linkActiveClass: "text-accent-dark dark:text-accent-light",
});

export default router;
