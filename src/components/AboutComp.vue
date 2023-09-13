<script setup lang="ts">
import { ref, reactive, inject, useAttrs, useSlots } from 'vue';
// 接口
interface Book {
  title: string,
  year?: string
}
const nums = ref<number | undefined>(23)
const book: Book = reactive({
  title: '1367'
})
console.log("🚀 ~ file: AboutComp.vue:12 ~ inject('book'):", inject<string>('book'))

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
  bar: Number
})
console.log("🚀 ~ file: AboutComp.vue:27 ~ props:", props)

const emit = defineEmits<{
  (e: 'change', id: number): void
}>()
function emitEvent() {
  emit('change', 123)
}

const slot = defineSlots<{
  default(props: {msg: string}): any
}>()

console.log("🚀 ~ file: AboutComp.vue:40 ~ useAttrs():", useAttrs())
console.log("🚀 ~ file: AboutComp.vue:40 ~ useSlots():", useSlots())


</script>

<template>
<button @click="emitEvent">change</button>
</template>

<style lang="scss" scoped>

</style>