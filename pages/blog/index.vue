<script setup lang="ts">
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/').find()
)

useSeoMeta({
  title: 'emir. | Blog',
  description: 'My thoughts and writings about development'
})
</script>

<template>
  <Navbar />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
    <h1 class="text-4xl font-bold font-poppins text-text dark:text-dark-text mb-8">Blog Posts</h1>
    
    <div v-if="posts?.length" class="space-y-8">
      <article v-for="post in posts" :key="post.id" 
               class="p-6 bg-text/5 dark:bg-dark-text/5 rounded-xl hover:transform hover:scale-[1.01] transition-transform">
        <NuxtLink :to="'/blog' + post._path" class="space-y-2">
          <h2 class="text-2xl font-semibold text-text dark:text-dark-text">{{ post.title }}</h2>
          <p class="text-text/80 dark:text-dark-text/80">{{ post.description }}</p>
          <div class="text-sm text-text/60 dark:text-dark-primary">
            {{ new Date(post.date).toLocaleDateString() }}
          </div>
        </NuxtLink>
      </article>
    </div>
    
    <div v-else class="text-center text-text/80 py-12">
      No blog posts found
    </div>
  </div>
</template>
