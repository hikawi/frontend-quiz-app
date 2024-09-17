<script setup lang="ts">
import { useCount, countStore } from "../stores/count";

const state = useCount(countStore);
</script>

<template>
  <div class="flex flex-col items-center justify-center p-2">
    <span class="text-4xl font-bold">{{ state.count }}</span>
    <div class="flex flex-row items-center justify-center gap-4">
      <button
        @click="state.increment"
        class="rounded-md bg-blue-500 p-2 text-white"
      >
        +
      </button>
      <button
        @click="state.decrement"
        class="rounded-md bg-blue-500 p-2 text-white"
      >
        -
      </button>
    </div>
  </div>
</template>
