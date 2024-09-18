<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { computed } from "vue";
import { $quiz } from "../stores/quiz";
import { useReady } from "../stores/useReady";
import FilledIcon from "./icons/FilledIcon.vue";

const quiz = useStore($quiz);
const ready = useReady();

const name = computed(() => {
  if (!ready) return "";
  switch (quiz.value.subject) {
    case "accessibility":
      return "Accessibility";
    case "html":
      return "HTML";
    case "css":
      return "CSS";
    case "js":
      return "JavaScript";
    default:
      return "";
  }
});
</script>

<template>
  <div
    class="flex h-10 flex-row items-center gap-4 text-lg font-medium sm:h-14 sm:gap-6 sm:text-[1.75rem]"
    v-if="ready"
  >
    <FilledIcon :subject="quiz.subject" />
    <span>{{ name }}</span>
  </div>
</template>
