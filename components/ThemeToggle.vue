<script setup lang="ts">
import {
  type AnimationVariant,
  type AnimationStart,
  createAnimation,
} from "~/utils";

interface Props {
  variant?: AnimationVariant;
  start?: AnimationStart;
  showLabel?: boolean;
  url?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "circle",
  start: "top-right",
  showLabel: false,
  url: undefined,
});

const styleId = "theme-transition-styles";
const colorMode = useColorMode();

const updateStyles = (css: string, name: string) => {
  if (import.meta.client) {
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;
  }
};

// i dont know why is still not included in the types
declare global {
  interface Document {
    startViewTransition?: (callback: () => void) => void;
  }
}

const toggleTheme = () => {
  const animation = createAnimation(props.variant, props.start, props.url);
  updateStyles(animation.css, animation.name);

  if (!import.meta.client) return;

  const switchTheme = () => {
    colorMode.preference = colorMode.value === "light" ? "dark" : "light";
  };

  if (!document.startViewTransition) {
    switchTheme();
    return;
  }

  document.startViewTransition(switchTheme);
};
</script>

<template>
  <button @click="toggleTheme">
    <p class="font-poppins font-semibold text-2xl text-text dark:text-dark-text">
      emir<span class="text-primary dark:text-dark-accent">.</span>
    </p>
  </button>
</template>
