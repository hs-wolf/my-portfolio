<script setup lang="ts">
const projects = [
  {
    title: "Taverna Central",
    tech: "NodeJS, JavaScript, TypeScript and Discord API",
    description:
      "A manager bot for an online tabletop rpg Discord server. It has more than 60 files and 5000 lines of code.",
    repo: "https://github.com/josh-israel/bot-discord-taverna-central",
  },
  {
    title: "Music Share App",
    tech: "NodeJS, VueJS, JavaScript, TypeScript and Firebase",
    description:
      "Simple app where users can upload and listen to musics from other users, they can also add comments.",
    repo: "https://github.com/josh-israel/music-share-app",
    visit: "https://ji-music-share-app.vercel.app",
  },
  {
    title: "My Portolio",
    tech: "NodeJS, VueJS, JavaScript and TypeScript",
    description:
      "Responsive, modern and lightweight portfolio to share all about me as a developer.",
    repo: "https://github.com/josh-israel/my-portfolio",
  },
];
</script>

<template>
  <div class="space-y-4">
    <p class="text-xl lg:text-3xl px-1 text-gray-500 dark:text-gray-400">
      All projects are under the MIT license and are available on my Github.
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
      <div
        v-for="project in projects"
        :key="project.title"
        class="flex flex-col space-y-2 border border-gray-300 dark:border-gray-600 p-4 rounded"
      >
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <span class="text-xl font-bold">{{ project.title }}</span>
          </div>
          <div class="flex space-x-2">
            <a
              :href="project.repo"
              target="_blank"
              :title="project.title"
              class="hidden lg:flex w-full lg:w-auto items-center space-x-2 bg-green-400 dark:bg-green-600 p-2 rounded text-white hover:opacity-75"
            >
              <!-- <font-awesome-icon :icon="['fab', 'github']" size="lg" /> -->
              <span>Repo</span>
            </a>
            <div :class="{ hidden: !project.visit }">
              <a
                :href="project.repo"
                target="_blank"
                :title="project.title"
                class="hidden lg:flex w-full lg:w-auto items-center space-x-2 bg-blue-400 dark:bg-blue-600 p-2 rounded text-white hover:opacity-75"
              >
                <!-- <font-awesome-icon
                  :icon="['fas', 'external-link-square-alt']"
                  size="lg"
                /> -->
                <span>Visit</span>
              </a>
            </div>
          </div>
        </div>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{
          project.tech
        }}</span>
        <div class="flex flex-col space-y-2">
          <span>{{ project.description }}</span>
          <a
            :href="project.repo"
            target="_blank"
            :title="project.title"
            class="w-full lg:w-auto p-2 flex lg:hidden space-x-2 items-center bg-green-400 dark:bg-green-600 rounded text-white hover:opacity-75"
          >
            <!-- <font-awesome-icon :icon="['fab', 'github']" size="lg" /> -->
            <span>Repo</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
