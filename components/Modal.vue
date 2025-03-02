<script setup lang="ts">
interface Props {
  isOpen: boolean;
  title?: string;
  size?: 'sm' | 'md' | 'lg';
}

interface Emits {
  (e: 'close'): void;
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false,
  title: '',
  size: 'md',
});

const emit = defineEmits<Emits>();

const modalSizes = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
};

// Close modal when clicking outside
const handleBackdropClick = (e: MouseEvent) => {
  if ((e.target as HTMLElement).id === 'modal-backdrop') {
    emit('close');
  }
};

// Close modal on escape key
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close');
  }
};

// Add/remove event listeners
onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        id="modal-backdrop"
        class="fixed inset-0 bg-text/20 dark:bg-dark-text/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click="handleBackdropClick"
      >
        <div
          :class="[modalSizes[size], 'w-full']"
          class="bg-background dark:bg-dark-background rounded-xl shadow-lg"
        >
          <!-- Header -->
          <div class="flex items-center justify-between p-4 border-b border-text/10 dark:border-dark-text/10">
            <h3 class="text-lg font-semibold text-text dark:text-dark-text">
              {{ title }}
            </h3>
            <button
              @click="emit('close')"
              class="text-text/60 hover:text-primary dark:text-dark-text/60 dark:hover:text-dark-accent transition-colors"
            >
              <svg
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="p-4">
            <slot />
          </div>

          <!-- Footer -->
          <div
            v-if="$slots.footer"
            class="flex justify-end gap-2 p-4 border-t border-text/10 dark:border-dark-text/10"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
