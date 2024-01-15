import { onMounted, onUnmounted } from 'vue'

export function useKeyDownEvent(handler: (event: KeyboardEvent) => void) {
  onMounted(() => document.addEventListener('keyup', handler))
  onUnmounted(() => document.removeEventListener('keyup', handler))
}
