export default defineNuxtRouteMiddleware((to, from) => {
    const isAuthenticated = true // 这里应该是实际的身份验证逻辑
    if (!isAuthenticated && to.path !== '/login') {
      return navigateTo('/login')
    }
  })