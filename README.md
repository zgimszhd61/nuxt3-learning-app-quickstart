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
