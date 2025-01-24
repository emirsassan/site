<script setup>
useHead({
  title: "emir.",
  meta: [
    { name: "theme-color", content: "#F05813" }
  ]
})
useSeoMeta({
  ogTitle: "emir.",
  description: "hi welcome to my site"
})
</script>

<template>
  <div>
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  </div>
</template>