<script setup>
const projects = [
  {
    title: 'Anisto',
    description: 'Simple string editor for .msg files used in the game Persona 5 Royal',
    image: 'https://i.imgur.com/oydWQyO.png',
    tags: ['Solid.js', 'TailwindCSS', 'Node.js', 'Tauri'],
    links: {
      github: 'https://github.com/Anistodev/code'
    }
  },
  {
    title: 'My Website',
    description: "My portfolio, most likely the website you're on right now!",
    image: 'https://i.imgur.com/feHIvoo.png',
    tags: ['Nuxt', 'TypeScript', 'TailwindCSS'],
    links: {
      github: 'https://github.com/emirsassan/site',
      live: 'https://emir.buzz'
    }
  },
  {
    title: 'Indx',
    description: "Mod database for weave modding framework",
    image: 'https://i.imgur.com/fqgpJub.png',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
    links: {
      github: 'https://github.com/emirsassan/indx',
      live: 'https://indx.emir.buzz'
    }
  },
  {
    title: 'Royal',
    description: "A rust library for parsing Persona 5 Royal's .msg files",
    image: 'https://i.imgur.com/fAFg6vM.png',
    tags: ['Rust'],
    links: {
      github: 'https://github.com/emirsassan/royal'
    }
  }
];
</script>

<template>
  <section id="projects" class="py-20 bg-background dark:bg-dark-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold font-poppins text-text dark:text-dark-text mb-8">My Projects</h2>
      
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.title" 
             class="bg-text/5 dark:bg-dark-zimbirti rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-transform duration-300 flex flex-col">
          <div class="aspect-video w-full overflow-hidden">
            <img :src="project.image" :alt="project.title" 
                 class="w-full h-full object-cover"
                 onerror="this.src='https://placehold.co/640x360/png'" />
          </div>
          
          <!-- Project Info -->
          <div class="p-4 flex flex-col flex-grow">
            <div class="space-y-3 flex-grow">
              <h3 class="text-xl font-semibold text-text dark:text-dark-text">{{ project.title }}</h3>
              
              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5">
                <span v-for="tag in project.tags" :key="tag"
                      class="px-2 py-0.5 bg-primary/10 dark:bg-dark-accent/55 dark:text-dark-text text-primary rounded-full text-xs">
                  {{ tag }}
                </span>
              </div>
              
              <p class="text-text/80 dark:text-dark-text text-sm">{{ project.description }}</p>
            </div>
            
            <div class="flex gap-4 pt-4 mt-auto">
              <a v-if="project.links.github" 
                 :href="project.links.github"
                 target="_blank"
                 class="inline-flex items-center gap-1.5 text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors text-sm">
                <svg class="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                Code
              </a>
              <a v-if="project.links.live" 
                 :href="project.links.live"
                 target="_blank"
                 class="inline-flex items-center gap-1.5 text-text/80 dark:text-dark-text/80 hover:text-primary dark:hover:text-dark-primary transition-colors text-sm">
                <svg class="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7Z"/>
                </svg>
                Open
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 