<template>
  <div class="fixed inset-0 flex flex-col">
    <Navbar />
    <div class="flex-1 flex flex-col items-center overflow-scroll hide-scroll">
      <router-view v-slot="{ Component }">
        <transition name="slide-left">
          <component :is="Component" />
        </transition>
      </router-view>
      <Footer class="mt-auto" />
    </div>
  </div>
</template>
