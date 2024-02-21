<template>
  <div class="container">
    <section class="panel blue">
      <p>第一屏</p>
    </section>

    <section class="panel orange">
      <p>第二屏（旋转</p>
    </section>

    <section class="panel red">
      <p>第三屏（背景色会变</p>
    </section>

    <section class="panel blue yoyo">
      <p>第四屏（字体放大</p>
    </section>
  </div>

</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/all';
import { onMounted, onUnmounted } from 'vue';
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  gsap.utils.toArray('.panel').forEach(function (container, i) {
    ScrollTrigger.create({
      trigger: container as HTMLElement,
      scrub: true,
      start: 'top 90%', // 动画开始位置
      end: 'bottom 10%', // 动画结束位置
      markers: true,
      onToggle: self => {
        self.isActive && gsap.to(window, {
          duration: 1,
          scrollTo: (container as HTMLElement).offsetTop,
          overwrite: true, // 该目标的所有动画将被覆盖
        })
      },
    })
  })
  // gsap.to('.orange p', {
  //   scrollTrigger: '.orange',
  //   duration: 2,
  //   rotation: 360,
  // })

  // gsap.to('.red', {
  //   scrollTrigger: {
  //     trigger: '.red',
  //     toggleActions: 'restart pause reverse pause',
  //   },
  //   duration: 1,
  //   backgroundColor: '#FFA500',
  //   ease: 'none',
  // })

  // gsap.to('.yoyo p', {
  //   scrollTrigger: '.yoyo',
  //   scale: 2,
  //   repeat: -1, // repeat为-1时是无限循环
  //   yoyo: true,
  //   ease: 'power2',
  // })
})
onUnmounted(() => {
  ScrollTrigger.killAll()
})
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  // overflow-y: scroll;
  // scroll-snap-type: y mandatory;
}

.panel {
  scroll-snap-align: start;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.5em;
  text-align: center;
  color: white;
  position: relative;
  box-sizing: border-box;
}
// .blue {
//   background-color: rgb(41, 41, 214);
// }
// .orange {
//   background-color: rgb(235, 165, 36);
// }
// .red {
//   background-color: rgb(182, 35, 35);
// }

</style>