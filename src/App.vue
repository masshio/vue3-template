<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import localforage from 'localforage';
import img1 from '@/assets/img1.png'
const myIndexedDB = localforage.createInstance({
  name: 'myIndexedDB'
})

// 存取都是异步操作
myIndexedDB.setItem('name', 'king').then(res => {
  console.log("🚀 ~ file: App.vue:11 ~ myIndexedDB.setItem ~ res:", res)
})
myIndexedDB.getItem('name').then(res => {
  console.log("🚀 ~ file: App.vue:14 ~ myIndexedDB.getItem ~ res:", res)
})


const myIndexedDB2 = localforage.createInstance({
  name: 'myIndexedDB2'
})

myIndexedDB2.setItem('pageIndex', {
  page: 10
})

import.meta.hot?.on('fileUpdate', ({timestamp, file}) => {
  const time = new Date(timestamp)
  const hour = time.getHours()
  const minute = time.getMinutes()
  console.log(`更新时间：${hour}:${minute}, 更新文件：${file}`);
})
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/tailwind">tailwind</RouterLink>
        <RouterLink to="/gsap">gsap</RouterLink>
        <RouterLink to="/gsap/screen">滚动屏</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
