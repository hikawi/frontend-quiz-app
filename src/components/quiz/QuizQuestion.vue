<script setup lang="ts">
defineProps<{
  question: string;
  number: number;
}>();
</script>

<template>
  <div class="flex w-full flex-col gap-6 sm:gap-10 xl:gap-40">
    <div class="flex w-full flex-col gap-3 sm:gap-6">
      <h1 class="text-sm italic text-gray-navy sm:text-xl dark:text-light-blue">
        Question {{ number + 1 }} of 10
      </h1>

      <p class="text-xl font-medium leading-tight sm:text-4xl">
        {{ question }}
      </p>
    </div>

    <progress
      :max="10"
      :value="number"
      aria-label="Progress bar for the quiz"
    />
  </div>
</template>

<style lang="sass" scoped>
progress
  appearance: none
  -webkit-appearance: none
  @apply h-4 w-full border-none bg-white dark:bg-navy rounded-full p-1

  &::-moz-progress-bar
    @apply bg-purple rounded-full

  &::-webkit-progress-bar
    @apply bg-white dark:bg-navy rounded-full

  &::-webkit-progress-value
    @apply bg-purple rounded-full
</style>
