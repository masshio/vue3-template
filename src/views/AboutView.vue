<script lang="ts" setup>
import AboutComp from '@/components/AboutComp.vue'
import { onMounted, ref, provide } from 'vue';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const counterStore = useCounterStore()
const { count, doubleCount } = storeToRefs(counterStore)
const input = ref<InstanceType<typeof AboutComp> | null>(null)

onMounted(() => {
  counterStore.increment()
  // 必须在mounted后拿，否则是null
  console.log(input.value?.nums);
})

counterStore.myIndexedDB.getItem('key').then(res => {
  console.log(res);
})

function acceptEmit(id: number): void {
  console.log(id);
}
const book = ref('book')
provide('book', book)

function clearState() {
  counterStore.$reset()
}

function dispatchState() {
  counterStore.$patch({
    count: 5
  })
}

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
    <button @click="clearState">clear</button>
    <button @click="dispatchState">dispatch</button>
    <AboutComp foo="1" :type="780" @change="acceptEmit" ref="input">
      <template #default>
        <div>default</div>
      </template>
      <template #footer>
        <div>footer</div>
      </template>
    </AboutComp>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
