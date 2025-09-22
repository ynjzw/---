import { createRouter, createWebHashHistory } from 'vue-router'
import myvue from '../views/myvue.vue'
import person from '../views/person.vue'
import home from '../views/home.vue'
import test from '../views/test.vue'
import world from '../views/world.vue'
import form from '../views/form.vue'
import table from '../views/table.vue'
// 定义路由表
const routes = [
  {name: 'home', path: '/', component: home},
  {name: 'person', path: '/person', component: person},
  {name: 'myvue', path: '/myvue', component: myvue},
  {name: 'test',path: '/test',component: test},
  {name: 'world',path: '/world',component: world}
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes //路由表
})

export default router
