<script setup lang="ts">
import { computed } from "vue";
import FilledIcon from "./icons/FilledIcon.vue";

const props = defineProps<{
  subject: string;
}>();

const name = computed(() => {
  switch (props.subject) {
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
  >
    <FilledIcon :subject />
    <span>{{ name }}</span>
  </div>
</template>
