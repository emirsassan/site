<script setup>
const skills = [
  { category: 'Frontend', items: ['Vue.js', 'Nuxt', 'React', 'NextJS', 'TailwindCSS', 'TypeScript'] },
  { category: 'Backend', items: ['Node.js', 'Bun', 'Express', 'Elysiajs', 'Prisma', 'MongoDB', 'PostgreSQL'] },
  { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
];
</script>

<template>
  <section id="about" class="py-20 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl font-bold font-poppins text-text mb-8">About Me</h2>
      
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-6">
          <p class="text-text/80 leading-relaxed">
            I'm a developer based in Turkey, with a strong focus on creating 
            various and user-friendly web applications.
          </p>
          <p class="text-text/80 leading-relaxed">
            When I'm not coding, you can find me playing random games, contributing to open-source 
            projects, or sharing knowledge with the other developers.
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-semibold font-poppins text-text mb-6">My Skills</h3>
          <div class="space-y-6">
            <div v-for="skillSet in skills" :key="skillSet.category" class="space-y-3">
              <h4 class="text-lg font-medium text-primary">{{ skillSet.category }}</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in skillSet.items" 
                  :key="skill"
                  class="px-4 py-2 bg-text/5 rounded-lg text-text/80 text-sm"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 