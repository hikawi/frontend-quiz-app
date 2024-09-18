<script setup lang="ts">
import { computed, ref } from "vue";
import QuizQuestion from "./QuizQuestion.vue";
import QuizChoices from "./QuizChoices.vue";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const props = defineProps<{
  questions: Question[];
}>();

const current = ref(0);
const question = computed(() => props.questions[current.value]);

function handleNext() {
  if (current.value < props.questions.length - 1) {
    current.value++;
  } else {
    location.href = "/results";
  }
}
</script>

<template>
  <main
    class="flex w-full flex-col gap-10 px-6 py-8 sm:gap-16 xl:flex-row xl:gap-32 xl:px-32"
  >
    <QuizQuestion :question="question.question" :number="current" />
    <QuizChoices
      :choices="question.options"
      :answer="question.answer"
      @next="handleNext"
    />
  </main>
</template>
