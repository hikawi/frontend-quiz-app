<script setup lang="ts">
import IconAccessibility from "./icons/IconAccessibility.vue";
import IconHtml from "./icons/IconHtml.vue";
import IconCss from "./icons/IconCss.vue";
import IconJs from "./icons/IconJs.vue";

import { $quizData } from "../stores/quiz";
import { useStore } from "@nanostores/vue";

const quiz = useStore($quizData);
</script>

<template>
  <div class="flex flex-row items-center gap-4 sm:gap-6">
    <template v-if="quiz.subject === 'accessibility'">
      <IconAccessibility />
      <span class="text-lg font-medium sm:text-[1.75rem]">Accessibility</span>
    </template>
    <template v-else-if="quiz.subject === 'html'">
      <IconHtml />
      <span class="text-lg font-medium sm:text-[1.75rem]">HTML</span>
    </template>
    <template v-else-if="quiz.subject === 'css'">
      <IconCss />
      <span class="text-lg font-medium sm:text-[1.75rem]">CSS</span>
    </template>
    <template v-else-if="quiz.subject === 'js'">
      <IconJs />
      <span class="text-lg font-medium sm:text-[1.75rem]">JavaScript</span>
    </template>
    <template v-else>
      <span class="invisible">Unknown</span>
    </template>
  </div>
</template>
