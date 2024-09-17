import { createPinia, defineStore } from "pinia";

const countStore = createPinia();
const useCount = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});

export { countStore, useCount };
