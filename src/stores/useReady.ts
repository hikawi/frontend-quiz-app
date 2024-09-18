import { onMounted, ref, type Ref } from "vue";

export function useReady(): Ref<boolean> {
  const mounted = ref(false);
  onMounted(() => (mounted.value = true));
  return mounted;
}
