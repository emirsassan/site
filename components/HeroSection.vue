<script setup>
import JsIcon from './icons/JsIcon.vue';
import NuxtIcon from './icons/NuxtIcon.vue';
import TailwindIcon from './icons/TailwindIcon.vue';
import TsLogo from './icons/TsLogo.vue';
import VueIcon from './icons/VueIcon.vue';

const techStack = [
  { name: 'Vue', icon: VueIcon, position: 'animate-float-1' },
  { name: 'Nuxt', icon: NuxtIcon, position: 'animate-float-2' },
  { name: 'TypeScript', icon: TsLogo, position: 'animate-float-3' },
  { name: 'TailwindCSS', icon: TailwindIcon, position: 'animate-float-4' },
  { name: 'JavaScript', icon: JsIcon, position: 'animate-float-5' },
];

const scrollToAbout = () => {
  const aboutSection = document.querySelector('#about')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="min-h-[calc(100vh-5rem)] flex items-center justify-center py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col-reverse md:flex-row items-center gap-12">
        <div class="flex-1 text-center md:text-left">
          <h1 class="font-poppins font-bold text-4xl md:text-6xl text-text mb-4">
            Hello everyone 👋
          </h1>
          <p class="font-poppins text-text/80 text-lg mb-8">
            I'm a full-stack developer from Turkey
          </p>
          <a 
            href="https://github.com/emirsassan" 
            target="_blank"
            class="inline-flex items-center gap-2 bg-text text-background px-6 py-3 rounded-lg hover:bg-primary transition-colors duration-200"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
            </svg>
            Check my Github
          </a>
        </div>

        <div class="relative flex-1 flex justify-center mb-8 md:mb-0">
          <div class="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary relative z-10">
            <NuxtImg
              src="https://github.com/emirsassan.png"
              alt="Profile"
              class="w-full h-full object-cover select-none"
            />
          </div>
          <!-- Floating tech stack -->
          <div v-for="tech in techStack" :key="tech.name" 
               :class="['absolute', tech.position]">
            <component :is="tech.icon" class="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>

    <!-- Bouncing arrow -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <button @click="scrollToAbout" class="text-text/80 hover:text-primary transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </div>
  </section>
</template>

<style>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-float-1 { animation: float 3s ease-in-out infinite; top: 0; left: 20%; }
.animate-float-2 { animation: float 3s ease-in-out infinite 0.6s; top: 20%; right: 0; }
.animate-float-3 { animation: float 3s ease-in-out infinite 1.2s; bottom: 0; right: 15%; z-index: 10; }
.animate-float-4 { animation: float 3s ease-in-out infinite 1.8s; bottom: 20%; left: 0; }
.animate-float-5 { animation: float 3s ease-in-out infinite 2.4s; top: 40%; left: 10%; }
</style> 