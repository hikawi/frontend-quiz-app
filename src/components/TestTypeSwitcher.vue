<script setup lang="ts">
import { quizData } from "../stores/quiz";
import { useStore } from "@nanostores/vue";

const $quiz = useStore(quizData);

function setSubject(subject: string) {
  quizData.setKey("subject", subject);
}
</script>

<template>
  <div class="flex flex-row gap-4">
    <button
      :class="{ underline: $quiz.subject === 'html' }"
      @click="() => setSubject('html')"
    >
      HTML
    </button>
    <button
      :class="{ underline: $quiz.subject === 'css' }"
      @click="() => setSubject('css')"
    >
      CSS
    </button>
    <button
      :class="{ underline: $quiz.subject === 'js' }"
      @click="() => setSubject('js')"
    >
      JS
    </button>
    <button
      :class="{ underline: $quiz.subject === 'accessibility' }"
      @click="() => setSubject('accessibility')"
    >
      Accessibility
    </button>
    <button
      :class="{ underline: $quiz.subject === 'none' }"
      @click="() => setSubject('none')"
    >
      None
    </button>
  </div>
</template>
