<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
const isDrawing = ref(false);
let ctx = null;

const strokeStyle = ref("#000000");
const lineWidth = ref(2);

onMounted(() => {
  if (!canvas.value) return;

  ctx = canvas.value.getContext("2d");

  canvas.value.width = 600;
  canvas.value.height = 400;

  ctx.strokeStyle = strokeStyle.value;
  ctx.lineWidth = lineWidth.value;
  ctx.lineCap = "round";
});

function startDrawing(event) {
  isDrawing.value = true;
  draw(event);
}

function stopDrawing() {
  isDrawing.value = false;
  ctx.beginPath();
}

function draw(event) {
  if (!isDrawing.value) return;

  const rect = canvas.value.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function clearCanvas() {
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
}
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <canvas
      ref="canvas"
      class="bg-white"
      @mousedown="startDrawing"
      @mousemove="draw"
      @mouseup="stopDrawing"
      @mouseleave="stopDrawing"
    />
    <div class="flex gap-4 items-center">
      <button
        @click="clearCanvas"
        class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 dark:bg-dark-accent dark:hover:bg-dark-accent/90"
      >
        Clear Canvas
      </button>
      <!-- <input
        type="color"
        v-model="strokeStyle"
        @input="ctx.strokeStyle = strokeStyle"
      />
      <input
        type="range"
        v-model="lineWidth"
        min="1"
        max="20"
        @input="ctx.lineWidth = lineWidth"
      /> -->
    </div>
  </div>
</template>
