import { ref } from 'vue'

// let selectedKey: number | undefined
const selectedKey = ref('')

export const useSelectedKey = {
  get: (): string => {
    if (selectedKey === undefined) {
      return ''
    }
    return selectedKey.value
  },
  set: (key: string) => {
    selectedKey.value = key
  },
}
