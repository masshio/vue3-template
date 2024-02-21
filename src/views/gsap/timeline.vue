<template>
  <div class="box1"></div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted, onUnmounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
onMounted(() => {
  const t1 = gsap.timeline({repeat: 1, repeatDelay: 1})
  // 绝对值：在某个绝对秒数来执行动画。
  // <符和>符：”<”在上个动画开始，”>”在上个动画结束。
  // 相对符：+=在最后一个动画结束后，-=在最后一个动画结束前。
  // label值：直接用某个时间点的label名。
  t1.to('.box1',{
    x: 200,
    duration: 1
  })
  .add('label', 2) // 在两秒的时候添加一个label
  .to('.box1',{
    y: 200,
    duration: 1
  }, '<')
  .to('.box1', {
    x: 400,
    duration: 1
  },'+=1')
  .to('.box1', {
    rotate: 180,
    duration: 1,
  }, 'label-=1')
})
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<style lang="scss" scoped>
.box1 {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: bisque;
}
</style>