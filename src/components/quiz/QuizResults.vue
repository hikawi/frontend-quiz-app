<script setup lang="ts">
import { $quiz } from "../../stores/quiz";
import { useStore } from "@nanostores/vue";
import { useReady } from "../../stores/useReady";
import TestType from "../TestType.vue";
import { computed } from "vue";

const quiz = useStore($quiz);
const ready = useReady();

const score = computed(() => {
  if (!ready.value) return 0;
  if (quiz.value.score < 0 || quiz.value.score > 10) return "lol";
  return quiz.value.score;
});
</script>

<template>
  <main
    class="flex w-full flex-col gap-10 px-6 py-8 sm:gap-16 sm:px-16 xl:flex-row xl:justify-between xl:px-32"
  >
    <h1
      class="text-3xl font-light leading-none xs:text-[2.5rem] sm:text-[4rem] xl:w-full"
    >
      Quiz completed <br /><span class="font-medium">You scored...</span>
    </h1>

    <div class="flex w-full flex-col gap-3 sm:gap-8 xl:w-full">
      <div
        class="flex w-full flex-col items-center justify-center gap-4 rounded-xl bg-white p-8 sm:gap-10 sm:p-12 dark:bg-navy"
      >
        <TestType v-if="ready" :subject="quiz.subject" />
        <span class="text-[5.5rem] font-medium leading-none">{{ score }}</span>
        <span class="text-lg leading-none text-gray-navy dark:text-light-blue"
          >out of 10</span
        >
      </div>

      <a
        class="relative flex h-14 w-full items-center justify-center rounded-xl bg-purple font-medium text-white after:absolute after:h-full after:w-full after:rounded-xl after:bg-white after:bg-opacity-0 after:content-[''] hover:after:bg-opacity-50"
        href="/"
      >
        Play Again
      </a>
    </div>
  </main>
</template>
