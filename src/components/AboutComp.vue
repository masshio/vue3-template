<script setup lang="ts">
import { ref, reactive, inject, useAttrs, useSlots } from 'vue';
import type { PropType } from 'vue'
// 接口
interface Book {
  title: string,
  year?: string
}
const nums = ref<number | undefined>(23)
const book: Book = reactive({
  title: '1367'
})

// 暴露属性
defineExpose({
  nums
})

const props = defineProps({
  foo: {
    type: String,
    required: true,
    default: '123'
  },
  info: {
    type: Object as PropType<Book>
  },
  bar: Number
})

const emit = defineEmits<{
  (e: 'change', id: number): void
}>()
function emitEvent() {
  emit('change', 123)
}

const slot = defineSlots<{
  default(props: {msg: string}): any
}>()



</script>

<template>
<button @click="emitEvent">change</button>
</template>

<style lang="scss" scoped>

</style>