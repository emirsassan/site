<script setup lang="ts">
const { path } = useRoute();

// Remove /blog prefix from path to match content directory structure
const slug = path.replace(/^\/blog/, "");

const { data: post } = await useAsyncData(`post-${slug}`, () =>
  queryContent("/").where({ _path: slug }).findOne()
);

useSeoMeta({
  title: post.value?.title ? `${post.value.title} | emir.` : "Blog | emir.",
  description: post.value?.description,
});
</script>

<template>
  <Navbar />
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <article v-if="post" class="prose prose-zinc decoration-primary max-w-none">
      <ContentRenderer :value="post" />
    </article>
    <div v-else class="text-center text-text/80">Post not found</div>
  </div>
</template>
