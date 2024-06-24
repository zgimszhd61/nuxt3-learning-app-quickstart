export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.provide('myPlugin', () => {
      console.log('这是一个简单的插件')
    })
  })