<template>
  <div class="fixed inset-0 flex flex-col">
    <Navbar />
    <div class="flex-1 flex flex-col max-w-5xl mx-auto p-4 overflow-scroll hide-scroll">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
      <Footer class="mt-auto" />
    </div>
  </div>
</template>
