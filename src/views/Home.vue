<script setup lang="ts">
const skills = [
  { name: "Linux", icon: 'i-skill-icons:linux-light', color: "text-orange-500" },
  { name: "Git", icon: 'i-skill-icons:git', color: "text-orange-500" },
  { name: "GitHub", icon: 'i-skill-icons:github-dark', color: "" },
  { name: "Docker", icon: 'i-skill-icons:docker', color: "" },
  { name: "Google Cloud", icon: 'i-skill-icons:gcp-light', color: "" },
  {
    name: "Firebase",
    icon: 'i-logos:firebase',
    color: "text-orange-400",
  },
  { name: "MongoDB", icon: 'i-skill-icons:mongodb', color: "text-green-500" },
  {
    name: "VS Code",
    icon: 'i-skill-icons:vscode-dark',
    color: "text-blue-400",
  },
  { name: "NodeJS", icon: 'i-skill-icons:nodejs-dark', color: "text-green-500" },
  { name: "Vite", icon: 'i-skill-icons:vite-dark', color: "text-green-700" },
  { name: "VueJS", icon: 'i-skill-icons:vuejs-light', color: "text-green-700" },
  { name: "Nuxt", icon: 'i-skill-icons:nuxtjs-dark', color: "text-green-700" },
  { name: "Svelte", icon: 'i-skill-icons:svelte', color: "text-green-700" },
  { name: "SvelteKit", icon: 'i-skill-icons:svelte', color: "text-green-700" },
  { name: "Angular 16", icon: 'i-skill-icons:angular-dark', color: "text-green-700" },
  {
    name: "JavaScript",
    icon: 'i-skill-icons:javascript',
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    icon: 'i-skill-icons:typescript',
    color: "text-blue-500",
  },
  { name: "Html5", icon: 'i-skill-icons:html', color: "text-red-500" },
  { name: "CSS3", icon: 'i-skill-icons:css', color: "text-blue-500" },
  { name: "Tailwind", icon: 'i-skill-icons:tailwindcss-dark', color: "text-blue-300" },
  {
    name: "Team Work",
    icon: 'i-fa:handshake-o',
    color: "",
    fullSize: true,
  },
  {
    name: "Communication",
    icon: 'i-fa-solid:comments',
    color: "",
    fullSize: true,
  },
  {
    name: "Time Management",
    icon: 'i-bx:stopwatch',
    color: "",
    fullSize: true,
  },
];

const projects = [
  {
    title: "Rpg Together",
    description:
      "A social app for people who play TTRPG (Table Top Role Playing Games).\nThis is my flagship project that utilizes most of my tech stack, from front-end development to cloud services and CI/CD.",
    repo: "https://github.com/hs-wolf/rpg-together/",
    visit: "https://client-lmggplptsq-ue.a.run.app/",
  },
  {
    title: "Booktone",
    description:
      "A social app focused on media sharing. It was a medium-sized project for an Israeli client. I worked here as a full-stack developer in a 5 man team, hired by Vizo Dev.",
    visit: "https://dev.booktone.co.il/",
  },
  {
    title: "Taverna Central",
    description:
      "A managing and administration bot for a Discord server. I worked here as project lead in a 3-man team.",
    repo: "https://github.com/josh-israel/bot-discord-taverna-central",
  },
];
</script>

<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-col gap-8 w-full lg:gap-16 px-4 py-8 lg:px-0 lg:py-16 lg:max-w-5xl lg:mx-auto">
      <div class="flex w-1/2 max-w-xs aspect-square">
        <img src="@/assets/imgs/pp.jpg" alt="Profile Picture" class="w-full rounded-full" />
      </div>
      <h1 class="text-3xl lg:text-4xl font-medium">&lt;hello-there /&gt;</h1>
      <h2 class="text-4xl lg:text-5xl  text-accent-dark dark:text-accent">My name is <strong>José (Joseph)
          Israel</strong>.
      </h2>
      <div class="flex flex-col gap-4 text-xl lg:text-2xl leading-8 lg:leading-9">
        <p>
          I'm a full-stack web developer passionate about turning ideas into sleek, user-friendly web solutions.
        </p>
        <p>
          I blend front-end finesse with back-end wizardry to create websites and apps that leave a lasting impression.
          Ready to take me on your team? Let's chat and make it happen!
        </p>
      </div>
    </div>
    <div class="flex bg-primary text-secondary dark:bg-secondary dark:text-primary">
      <div class="flex flex-col gap-8 w-full px-4 py-8 lg:gap-16 lg:max-w-5xl lg:mx-auto lg:px-0 lg:py-16">
        <h1 class="text-3xl lg:text-4xl font-medium">&lt;experience /&gt;</h1>
        <p class="text-xl opacity-70 lg:text-2xl leading-8 lg:leading-9">
          Check out the latest projects I worked on, from personal endeavors to company contracts.
        </p>
        <div class="grid grid-cols-1 gap-4 lg:gap-8">
          <div v-for="project in projects" :key="project.title" class="flex flex-col gap-2 rounded-sm">
            <div class="flex items-center justify-between">
              <h1 class="text-2xl lg:text-3xl text-accent dark:text-accent-dark font-medium">{{ project.title }}</h1>
              <div class="flex items-start gap-4">
                <a v-if="project.repo" :href="project.repo" target="_blank" :title="project.title"
                  class="flex items-center gap-2 bg-accent dark:bg-accent-dark p-1 rounded-sm text-secondary-light font-medium transition-transform hover:scale-95 lg:px-1.5">
                  <div class="i-skill-icons:github-dark text-2xl" />
                  <span class="hidden lg:inline">Repository</span>
                </a>
                <a v-if="project.visit" :href="project.visit" target="_blank" :title="project.title"
                  class="flex items-center gap-2 bg-external-dark dark:bg-external p-1 = rounded-sm text-secondary-light font-medium transition-transform hover:scale-95 lg:px-1.5">
                  <div class="i-bx:link-external text-2xl" />
                  <span class="hidden lg:inline">Visit Online</span>
                </a>
              </div>
            </div>
            <span class="lg:text-lg whitespace-pre-line">{{ project.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-8 w-full px-4 py-8 lg:gap-16 lg:px-0 lg:py-16 lg:max-w-5xl lg:mx-auto">
      <h1 class="text-3xl lg:text-4xl font-medium">&lt;skill-set /&gt;</h1>
      <p class="text-xl lg:text-2xl leading-8 lg:leading-9">
        These are all the languages, tools, and skills that I've learned throughout my career as a developer.
      </p>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
        <div v-for="(skill, index) in skills" :key="index"
          class="flex items-center gap-2 w-full bg-secondary dark:bg-primary border border-primary-light/20 dark:border-secondary-dark/20 p-2 flex-nowrap overflow-hidden rounded transition-transform hover:animate-pulse hover:scale-110 hover:z-10"
          :class="skill.fullSize ? 'col-span-2 lg:col-span-2' : ''">
          <div class="text-2xl" :class="skill.icon"></div>
          <span class="lg:text-lg">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
