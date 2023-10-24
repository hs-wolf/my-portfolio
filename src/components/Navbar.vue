<script setup lang="ts">
const navRoutes = [
  {
    route: "home",
    label: "Home",
    icon: 'i-carbon:user',
  },
  {
    route: "contact",
    label: "Contact",
    icon: 'i-carbon:email',
  },
];
</script>

<template>
  <div class="flex items-center justify-between w-full max-w-5xl p-4 mx-auto ">
    <div class="flex items-center gap-4 w-full text-4xl">
      <router-link v-for="route in navRoutes" :key="route.route" :to="{ name: route.route }" :title="route.label"
        class="transition-colors">
        <div :class="route.icon" />
      </router-link>

    </div>
    <div class="flex items-center gap-4 text-4xl">
      <a href="https://github.com/hs-wolf" target="_blank" title="Github" class="i-carbon:logo-github" />
      <a href="https://www.linkedin.com/in/hswolf-dev/" target="_blank" title="LinkedIn" class="i-carbon:logo-linkedin" />
      <div class="i-carbon:generate-pdf"></div>
    </div>
  </div>
</template>
