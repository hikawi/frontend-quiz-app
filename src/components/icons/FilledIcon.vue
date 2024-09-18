<script setup lang="ts">
import IconAccessibility from "./IconAccessibility.vue";
import IconHtml from "./IconHtml.vue";
import IconCss from "./IconCss.vue";
import IconJs from "./IconJs.vue";
import { computed } from "vue";

const props = defineProps<{
  subject: string;
}>();

const bgColor = computed(() => {
  switch (props.subject) {
    case "accessibility":
      return "bg-accessibility";
    case "html":
      return "bg-html";
    case "css":
      return "bg-css";
    case "js":
      return "bg-js";
    default:
      return "bg-transparent";
  }
});
</script>

<template>
  <div
    class="flex size-10 items-center justify-center rounded-lg p-1 sm:size-14 sm:p-2"
    :class="bgColor"
  >
    <IconAccessibility v-if="subject === 'accessibility'" />
    <IconHtml v-else-if="subject === 'html'" />
    <IconCss v-else-if="subject === 'css'" />
    <IconJs v-else-if="subject === 'js'" />
  </div>
</template>
