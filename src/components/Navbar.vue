<script setup lang="ts">
const navRoutes = [
  {
    route: "home",
    label: "Home",
    icon: 'i-carbon:home',
  },
  {
    route: "contact",
    label: "Contact",
    icon: 'i-carbon:email',
  },
];

const socialLinks = [
  {
    href: "https://github.com/hs-wolf",
    title: "Github",
    icon: 'i-carbon:logo-github',
  },
  {
    href: "https://www.linkedin.com/in/hswolf-dev/",
    title: "LinkedIn",
    icon: 'i-carbon:logo-linkedin',
  },
  {
    href: "josé-israel-resume.pdf",
    title: "Resume",
    icon: 'i-carbon:generate-pdf',
  },
];
</script>

<template>
  <div class="flex items-center justify-between w-full p-4 lg:max-w-5xl lg:px-0 lg:py-8 lg:mx-auto">
    <div class="flex items-center gap-4 text-3xl lg:text-4xl">
      <router-link v-for="route in navRoutes" :key="route.route" :to="{ name: route.route }" :title="route.label"
        class="transition-all hover:scale-95">
        <div :class="route.icon" />
      </router-link>
    </div>
    <div class="flex items-center gap-4 text-3xl lg:text-4xl">
      <a v-for="link in socialLinks" :key="link.title" :href="link.href" target="_blank" :title="link.title"
        class="flex transition-transform hover:scale-95" :class="link.icon" />

    </div>
  </div>
</template>
