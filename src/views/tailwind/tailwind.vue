<script setup lang="ts">

</script>

<template>
  <div class="wrapper my-3 shadow-lg">
    <div class="flex justify-start text-base/[20px] box-border h-10 pl-2 py-1 hover:text-xl/7 odd:bg-slate-100 even:bg-slate-300 first-child:bg-sky-700"
      v-for="item in 6" :key="item">
      <div class="basis-20 text-center text-gray-500">123{{ item }}</div>
      <div class="basis-20 text-right">456</div>
    </div>
    <button class="bg-sky-500 hover:bg-sky-700 active:text-slate-950 text-zinc-50 rounded-3xl px-2 py-1 m-2">
      Save changes
    </button>
  </div>

  <div class="menu">首页</div>
  <div class="menu">学习TailwindCSS</div>
  <div class="menu">TailwindCSS的设计哲学</div>
  <div class="menu">最佳实践</div>

  <!-- 响应式 -->
  <div class="w-[139px] h-[77px] bg-[#165DFF] md:max-xl:bg-slate-600 mt-3"></div>

  <div class="columns-3 mt-8 gap-8">
    <div class="h-8 bg-green-200 mb-8 break-inside-avoid text-center first:text-red-400 last:text-blue-300" v-for="item in 10" :key="item">{{ item+10 }}</div>
  </div>

  <div class="group p-4 mt-3 w-[200px] shadow-lg hover:shadow-xl hover:bg-blue-400 rounded-md bg-white">
    <div>New project</div>
    <div>Create a new project</div>
  </div>

</template>

<style scoped>
.menu {
  /* 使用apply */
  @apply p-2 text-gray-900 font-semibold;
  /* TailwindCSS提供了一个theme函数，可以拿到tailwind.config.js中配置的theme的值 */
  border: 1px solid theme('colors.gray.200');
}
</style>