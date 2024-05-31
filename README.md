# nuxt3-learning-app-quickstart
## 基本概念理解
1. 在app.vue之中配置`<NuxtPage />`，你就可以自动地把页面路由到pages下的文件了。譬如pages/xxx.vue ，对应访问地址是localhost:3000/xxx
2. 在components目录下的文件如LazyImage.vue，默认作为一个可复用的组件，在别的地方引用时只需要<LazyImage /> 一行就能引用进来.

## 后端使用fastapi
```
from fastapi import FastAPI

app = FastAPI()

@app.get("/mountains")
async def get_mountains():
    return [
  {
    "id": 1,
    "name": "Mount Everest"
  },
  {
    "id": 2,
    "name": "K2"
  },
  {
    "id": 3,
    "name": "Kangchenjunga"
  }
]
```

## 前端使用nuxt3
 - 只需要在app.vue之中加上`<NuxtPage />`，就会默认渲染pages目录下的多页面。
### pages/index.vue
```
<template>
    <div>
      <h1>山脉列表</h1>
      <div v-if="pending">加载中...</div>
      <div v-else-if="error">发生错误: {{ error.message }}</div>
      <ul v-else>
        <li v-for="mountain in data" :key="mountain.id">{{ mountain.name }}</li>
      </ul>
    </div>
</template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAsyncData } from 'nuxt/app';
  
  const { data, pending, error } = await useAsyncData('mountains', () => $fetch('http://127.0.0.1:8000/mountains'));
  </script>
```


### 实战教程：
linktree clone:
 - https://www.youtube.com/watch?v=NtsbjB8QD3Y

aliexpress clone:
 - https://www.youtube.com/watch?v=dVcCRFVhz74

tiktok clone:
 - https://www.youtube.com/watch?v=CHSL0Btbj_o

### 其他小Tips
 - public/ 目录下主要放静态图片和robots.txt 。 https://nuxt.com/docs/guide/directory-structure/public
 - server/ 目录用于向你的应用注册API和服务器处理程序，即放typescript的API程序（你也可以不用它，而是自己另用python + fastapi写API接口） https://nuxt.com/docs/guide/directory-structure/server
 - Nuxt 有一个插件系统，可以在创建 Vue 应用时使用 Vue 插件及其他功能。// 这个我还没用过.
 - 使用 composables/ 目录自动导入你的 Vue 组合函数到应用中。 -- 没用过。 https://nuxt.com/docs/guide/directory-structure/composables
 - assets/ 目录用来添加构建工具会处理的所有网站资源。 -- 没用过。 https://nuxt.com/docs/guide/directory-structure/assets
 - Nuxt 提供中间件，在进入特定路由前运行代码。 -- 没用过。 https://nuxt.com/docs/guide/directory-structure/middleware
 - 使用content/目录制作一个基于文件的内容管理系统。 -- https://nuxt.com/docs/guide/directory-structure/content

### 当前我觉得VueJS比较难的内容(想要搞明白）：
 - [X] 不同page页面之间的跳转如何实现.
  
 - [ ] 从极简的开始入门，跟着最简单的案例走一遍.
  
 - [ ] lazyLoad -- 如何实现下滑后再加载的功能.
  
 - [ ] 多页面实现 -- 如何实现route路由功能.
  
 - [ ] AXIOS -- 如何实现获取外部数据.
  
 - [ ] useFetch和useAsyncData -- 如何实现获取外部数据.
