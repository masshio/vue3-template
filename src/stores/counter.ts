import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import localforage from 'localforage'

export const useCounterStore = defineStore('counter', () => {
  const count = ref<number>(0)
  const extraCount = computed<number>(() => count.value + 3)
  const doubleCount = computed<number>(() => count.value * 2 + extraCount.value)
  const myIndexedDB = localforage.createInstance({
    name: 'piniaDB',
  })
  myIndexedDB.setItem('key', {
    value: 'keyValue'
  })
  function increment(): void {
    count.value++
  }
  function $reset() {
    count.value = 0
  }

  return { count, doubleCount, myIndexedDB, increment, $reset }
})
