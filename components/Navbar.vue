<script setup>
const navItems = [
  { name: "Home", href: "/#" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Blog", href: "/blog" },
];

const scrollTo = (element) => {
  const section = document.querySelector(element);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 bg-background/80 dark:bg-dark-zimbirti/80 backdrop-blur-sm border-b border-text/10 z-50"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <!-- <p class="font-poppins font-semibold text-2xl text-text">
            emir<span class="text-primary">.</span>
          </p> -->
          <ThemeToggle
            variant="gif"
            url="https://media.giphy.com/media/5PncuvcXbBuIZcSiQo/giphy.gif?cid=ecf05e47j7vdjtytp3fu84rslaivdun4zvfhej6wlvl6qqsz&ep=v1_stickers_search&rid=giphy.gif&ct=s"
          />
        </div>

        <div class="block">
          <div class="flex items-center space-x-8">
            <NuxtLink
              v-for="item in navItems"
              :key="item.name"
              :to="item.href"
              @click="scrollTo(item.href)"
              class="font-poppins text-text/80 dark:text-dark-text/80 hover:text-primary hover:dark:text-dark-accent transition-colors duration-200 text-sm font-medium"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
