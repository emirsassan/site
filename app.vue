<script setup>
useHead({
  title: "emir.",
  htmlAttrs: {
    lang: "en"
  },
  meta: [
    { name: "theme-color", content: "#F05813" }
  ]
})
useSeoMeta({
  ogTitle: "emir.",
  ogDescription: "hi welcome to my site",
  description: "hi welcome to my site",
  ogUrl: "https://emir.buzz"
})
</script>

<template>
  <div class="h-screen bg-background dark:bg-dark-background">
    <NuxtPage />
  </div>
</template>
