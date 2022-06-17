import { createRouter, createWebHistory } from "vue-router"
import Home from "../pages/index/index.vue"
import About from "../pages/about/index.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
]

console.log("history", createWebHistory())
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
})

export default router
