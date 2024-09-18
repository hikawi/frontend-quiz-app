<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import { $quiz } from "../stores/quiz";
import { useReady } from "../stores/useReady";
import TestType from "./TestType.vue";

const quiz = useStore($quiz);
const ready = useReady();

defineProps<{
  show?: boolean;
}>();
</script>

<template>
  <TestType
    :class="{ invisible: !show }"
    :subject="ready ? quiz.subject : ''"
  />
</template>
