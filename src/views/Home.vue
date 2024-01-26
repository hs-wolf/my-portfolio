<template>
  <div class="flex flex-col w-full">
    <div class="flex flex-col lg:flex-row lg:items-center gap-8 w-full lg:gap-16 px-4 py-8 lg:px-0 lg:py-16 lg:max-w-5xl lg:mx-auto">
      <div class="shrink-0 flex w-[192px] h-[192px]">
        <img src="@/assets/imgs/pp.jpg" alt="Profile Picture" class="w-full rounded-full" />
      </div>
      <div class="flex flex-col gap-4 lg:gap-8">
        <h2 class="text-4xl lg:text-5xl  text-accent-dark dark:text-accent tracking-wide">
          Hi, I'm <strong>José</strong>
        </h2>
        <div class="flex flex-col gap-4 text-xl lg:text-2xl leading-8 lg:leading-9">
          <p>
            Dedicated and ambitious, I’m a Fullstack Web Developer with 3+ years of experience who loves solving problems using technology.
          </p>
        </div>
      </div>
    </div>
    <div class="flex bg-secondary-light text-primary dark:bg-primary-dark dark:text-secondary">
      <div class="flex flex-col gap-8 w-full px-2 py-8 lg:gap-16 lg:max-w-5xl lg:mx-auto lg:px-0 lg:py-16">
        <p class="text-center text-xl lg:text-2xl leading-8 lg:leading-9">
          Check out the my latest projects, from personal endeavors to company contracts
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4">
          <div v-for="project in projects" :key="project.title" class="flex flex-col gap-4 p-4 rounded-sm bg-secondary dark:bg-primary shadow">
            <h1 class="text-2xl lg:text-3xl font-medium tracking-wide">{{ project.title }}</h1>
            <img v-if="project.image" :src="project.image" :alt="project.title" class="rounded-sm shadow">
            <div class="flex items-start gap-2">
                <a v-if="project.repo" :href="project.repo" target="_blank" :title="project.title" class="repo-button">
                  <div class="i-skill-icons:github-dark text-2xl" />
                  <span>Repository</span>
                </a>
                <a v-if="project.visit" :href="project.visit" target="_blank" :title="project.title" class="visit-button">
                  <div class="i-bx:link-external text-2xl" />
                  <span>Visit Online</span>
                </a>
              </div>
              <span class="lg:text-lg whitespace-pre-line">{{ project.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-8 w-full px-2 py-8 lg:gap-16 lg:px-0 lg:py-16 lg:max-w-5xl lg:mx-auto">
      <p class="text-center text-xl lg:text-2xl leading-8 lg:leading-9">
        These are all the languages, tools, and skills that I currently know
      </p>
      <div class="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
        <div v-for="(skill, index) in skills" :key="index"
          class="flex items-center gap-2 w-full bg-secondary dark:bg-primary border border-primary-light/20 dark:border-secondary-dark/20 p-2 flex-nowrap overflow-hidden rounded transition-transform hover:animate-pulse hover:scale-x-105 hover:z-10"
          :class="skill.fullSize ? 'col-span-2 lg:col-span-1' : ''">
          <div class="text-2xl" :class="skill.icon"></div>
          <span class="lg:text-lg">{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  { name: "HTML5", icon: 'i-skill-icons:html' },
  { name: "CSS3", icon: 'i-skill-icons:css' },
  {
    name: "JavaScript",
    icon: 'i-skill-icons:javascript'
  },
  {
    name: "TypeScript",
    icon: 'i-skill-icons:typescript'
  },
  { name: "NodeJS", icon: 'i-skill-icons:nodejs-dark'},
  { name: "VueJS", icon: 'i-skill-icons:vuejs-light'},
  { name: "Nuxt", icon: 'i-skill-icons:nuxtjs-dark'},
  { name: "Vite", icon: 'i-skill-icons:vite-dark'},
  { name: "Tailwind", icon: 'i-skill-icons:tailwindcss-dark' },
  { name: "Docker", icon: 'i-skill-icons:docker'},
  { name: "Google Cloud", icon: 'i-skill-icons:gcp-light'},
  {
    name: "Firebase",
    icon: 'i-logos:firebase',
    color: "text-orange-400",
  },
  { name: "MongoDB", icon: 'i-skill-icons:mongodb' },
  { name: "C#", icon: 'i-skill-icons:cs' },
  { name: "PostgresSQL", icon: 'i-skill-icons:postgresql-dark' },
  { name: "Angular 16", icon: 'i-skill-icons:angular-dark' },
  { name: "Linux", icon: 'i-skill-icons:linux-light' },
  { name: "Git", icon: 'i-skill-icons:git' },
  { name: "GitHub", icon: 'i-skill-icons:github-dark', color: "" },
  {
    name: "Visual Studio",
    icon: 'i-skill-icons:visualstudio-dark',
  },
  {
    name: "VS Code",
    icon: 'i-skill-icons:vscode-dark'
  },
  {
    name: "Data Flow Diagrams",
    icon: 'i-clarity:flow-chart-line',
    fullSize: true,
  },
  {
    name: "Design Patterns",
    icon: 'i-carbon:type-pattern',
    fullSize: true,
  },
  {
    name: "Agile / Scrum",
    icon: 'i-iconoir:agile',
    fullSize: true,
  },
  {
    name: "Kanban",
    icon: 'i-bi:kanban',
    fullSize: true,
  },
  
  {
    name: "Communication and Teamwork",
    icon: 'i-fa:handshake-o',
    fullSize: true,
  },
  {
    name: "Adaptability to change",
    icon: 'i-ic:baseline-change-circle',
    fullSize: true,
  },
  {
    name: "Time Management",
    icon: 'i-bx:stopwatch',
    fullSize: true,
  },
];

type Project = {
  title: string
  description: string
  repo?: string
  visit?: string
  image?: string
}

const projects: Project[] = [
  {
    title: "Rpg Together",
    description:
      "A social app for people who play TTRPG (Table Top Role Playing Games).\nThis is my flagship project that utilizes most of my tech stack, from front-end development to cloud services and CI/CD.",
    repo: "https://github.com/hs-wolf/rpg-together/",
    visit: "https://rpgtogether.net/",
    image: '/rpg-together-prtsc.png'
  },
  {
    title: "Pandoras Gate App",
    description:
      "A personal project to help my TTRPG group handle their character sheets. Lots of complex arithmetics and callback-dependent operations.",
    repo: "https://github.com/hs-wolf/pandoras-gate-app/",
    visit: "https://pandoras-gate-app.vercel.app/",
    image: '/pandoras-gate-prtsc.png'
  },
  {
    title: "Booktone",
    description:
      "A social app focused on media sharing. It was a medium-sized project for an Israeli client. I worked here as a full-stack developer in a 5 man team, hired by Vizo Dev.",
    visit: "https://dev.booktone.co.il/",
    image: '/booktone-prtsc.png'
  },
  {
    title: "My Portfolio",
    description:
      "My personal portfolio, where I can share my projects and learning experiences.",
    repo: "https://github.com/hs-wolf/my-portfolio",
    image: '/my-portfolio.png'
  },
  {
    title: "Taverna Central",
    description:
      "A managing and administration bot for a Discord server. I worked here as project lead in a 3-man team.",
    repo: "https://github.com/josh-israel/bot-discord-taverna-central",
  }, 
];
</script>

<style scoped>
.repo-button {
  @apply flex items-center gap-2 px-2 py-1.5 bg-accent-dark dark:bg-accent-dark rounded-sm text-secondary-light font-medium transition-transform hover:scale-95;
}
.visit-button {
  @apply flex items-center gap-2 px-2 py-1.5 bg-external-dark dark:bg-external-dark rounded-sm text-secondary-light font-medium transition-transform hover:scale-95;
}
</style>