<script setup lang="ts">
const skills = [
  {
    name: () => "JavaScript",
    icon: ["fab", "js-square"],
    color: "text-yellow-500",
  },
  {
    name: () => "TypeScript",
    icon: ["fab", "js-square"],
    color: "text-blue-500",
  },
  { name: () => "NodeJS", icon: ["fab", "node-js"], color: "text-green-500" },
  {
    name: () => "VS Code",
    icon: ["fas", "file-code"],
    color: "text-blue-400",
  },
  { name: () => "VueJS", icon: ["fab", "vuejs"], color: "text-green-700" },
  { name: () => "Git", icon: ["fab", "git-alt"], color: "text-orange-500" },
  { name: () => "GitHub", icon: ["fab", "github"], color: "" },
  {
    name: () => "Firebase",
    icon: ["fas", "fire-alt"],
    color: "text-orange-400",
  },
  { name: () => "MongoDB", icon: ["fab", "envira"], color: "text-green-500" },
  { name: () => "Html5", icon: ["fab", "html5"], color: "text-red-500" },
  { name: () => "CSS3", icon: ["fab", "css3-alt"], color: "text-blue-500" },
  { name: () => "Sass", icon: ["fab", "sass"], color: "text-pink-500" },
  { name: () => "Tailwind", icon: ["fas", "wind"], color: "text-blue-300" },
  { name: () => "Trello", icon: ["fab", "trello"], color: "text-blue-500" },
  {
    name: () => "Team Work",
    icon: ["fas", "handshake"],
    color: "",
    fullSize: true,
  },
  {
    name: () => "Communication",
    icon: ["fas", "comments"],
    color: "",
    fullSize: true,
  },
  {
    name: () => "Time Management",
    icon: ["fas", "stopwatch"],
    color: "",
    fullSize: true,
  },
];
</script>

<template>
  <div class="space-y-4">
    <p class="text-xl lg:text-3xl">
      These are all the languages, tools and skills that I've learned throughout
      my career as a developer.
    </p>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-2">
      <div v-for="(skill, index) in skills" :key="index"
        class="flex space-x-2 items-center border border-gray-300 dark:border-gray-600 p-2 flex-nowrap overflow-hidden rounded"
        :class="skill.fullSize ? 'col-span-2 lg:col-span-1' : ''">
        <!-- <font-awesome-icon
          :class="skill.color"
          :icon="skill.icon"
          size="2x"
          fixed-width
        /> -->
        <span>{{ skill.name() }}</span>
      </div>
    </div>
  </div>
</template>
