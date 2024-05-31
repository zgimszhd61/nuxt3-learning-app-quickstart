# nuxt3-learning-app-quickstart
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
