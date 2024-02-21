<template>
  <div class="wrapper">
    <div class="box1"></div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap';
import { onMounted, onUnmounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
onMounted(() => {
  gsap.to('.box1', {
    x: 200,
    duration: 1,
    rotate: 360,
    backgroundColor: 'red',
    scrollTrigger: {
      trigger: '.box1',
      scrub: true,
      start: 'top 90%',  //当触发物体（trigger）的顶部（top）碰到浏览器的底部（bottom）时
      end: 'bottom top+=100px', //当触发物体（trigger）的底部（bottom）碰到浏览器的顶部（top）距离100px时
      markers: true,
    },
  })
})

onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<style lang="scss" scoped>
.wrapper {
  height: 300vh;
  display: flex;
  align-items: center;
}
.box1 {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: bisque;
}
</style>