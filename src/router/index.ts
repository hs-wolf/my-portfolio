import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Projects from '@/views/Projects.vue'
import Skills from '@/views/Skills.vue'

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
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
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
