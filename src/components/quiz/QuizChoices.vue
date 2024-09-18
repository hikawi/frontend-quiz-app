<script setup lang="ts">
import { computed, ref, useTemplateRef } from "vue";
import IconError from "../icons/IconError.vue";
import IconCorrect from "../icons/IconCorrect.vue";

import { $quiz } from "../../stores/quiz";
import { useStore } from "@nanostores/vue";
import { validateEnvVariable } from "astro/env/runtime";

const props = defineProps<{
  choices: string[];
  answer: string;
}>();

const emit = defineEmits<{
  next: [];
}>();

const quiz = useStore($quiz);

const selectAnswer = ref("");
const submitted = ref(false);
const correct = computed(() => selectAnswer.value === props.answer);

function buttonHandler() {
  if (submitted.value) {
    $quiz.setKey(
      "score",
      correct.value ? quiz.value.score + 1 : quiz.value.score,
    );
    submitted.value = false;
    selectAnswer.value = "";
    emit("next");
  } else {
    submitted.value = true;
  }
}

function keypressHandler(event: KeyboardEvent, choice: string) {
  if (event.key === "Enter") {
    if (selectAnswer.value === choice) selectAnswer.value = "";
    else selectAnswer.value = choice;
  }
}
</script>

<template>
  <div
    class="flex w-full flex-col gap-3 text-lg font-medium sm:gap-6 sm:text-[1.75rem]"
    role="radiogroup"
  >
    <label
      v-for="(choice, idx) in choices"
      role="radio"
      :tabindex="submitted ? -1 : 0"
      @keydown="(event) => keypressHandler(event, choice)"
      :aria-checked="choice === selectAnswer"
      class="group relative flex flex-row items-center justify-between gap-4 rounded-xl border-[3px] bg-white p-3 shadow-lg sm:rounded-3xl xl:p-5 dark:bg-navy"
      :class="{
        'border-green': choice === selectAnswer && submitted && correct,
        'border-red': choice === selectAnswer && submitted && !correct,
        'border-purple': choice === selectAnswer && !submitted,
        'border-white dark:border-navy': choice !== selectAnswer,
      }"
    >
      <input
        type="radio"
        name="answer"
        class="peer absolute opacity-0"
        v-model="selectAnswer"
        :value="choice"
        :disabled="submitted"
      />

      <div class="group flex flex-row items-center gap-4">
        <div
          class="flex size-10 shrink-0 grow-0 items-center justify-center rounded-xl text-gray-navy"
          :class="{
            'bg-green text-white':
              choice === selectAnswer && submitted && correct,
            'bg-red text-white':
              choice === selectAnswer && submitted && !correct,
            'bg-purple text-white': choice === selectAnswer && !submitted,
            'bg-light-gray group-hover:bg-accessibility group-hover:text-purple group-focus:bg-accessibility group-focus:text-purple dark:bg-white':
              choice !== selectAnswer,
          }"
        >
          {{ "ABCD".at(idx) }}
        </div>

        {{ choice }}
      </div>

      <IconCorrect
        v-if="choice === answer && submitted"
        class="float-right size-6 shrink-0 sm:size-8 xl:size-10"
      />
    </label>

    <button
      :disabled="selectAnswer === ''"
      class="peer relative rounded-xl bg-purple p-3 text-white shadow-lg after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-xl after:bg-white after:bg-opacity-0 after:content-[''] after:hover:bg-opacity-50 disabled:cursor-not-allowed disabled:bg-purple disabled:bg-opacity-50 disabled:after:hover:bg-opacity-0 sm:rounded-3xl sm:p-8 sm:after:rounded-3xl"
      @click="buttonHandler"
    >
      {{ submitted ? "Next Question" : "Submit Answer" }}
    </button>

    <span
      class="hidden items-center justify-center gap-2 font-normal text-red peer-disabled:flex sm:text-2xl"
    >
      <IconError class="size-8 sm:size-10" />
      <span>Please select an answer</span>
    </span>
  </div>
</template>
