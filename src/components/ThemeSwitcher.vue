<script setup lang="ts">
import IconMoon from "./icons/IconMoon.vue";
import IconSun from "./icons/IconSun.vue";

function toggleTheme() {
  const htmlList = document.documentElement.classList;
  htmlList.toggle("dark");
  localStorage.setItem("theme", htmlList.contains("dark") ? "dark" : "light");
}
</script>

<template>
  <div class="flex flex-row gap-1 sm:gap-4">
    <IconSun />
    <button
      aria-label="Dark mode, light mode switcher"
      class="relative flex w-8 flex-row items-center justify-start rounded-full bg-purple p-1 sm:w-12 dark:justify-end"
      @click="toggleTheme"
    >
      <span class="size-3 rounded-full bg-white sm:size-5"></span>
    </button>
    <IconMoon />
  </div>
</template>
