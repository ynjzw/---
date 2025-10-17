import { createRouter, createWebHashHistory } from 'vue-router'
import myvue from '../views/myvue.vue'
import person from '../views/person.vue'
import home from '../views/home.vue'
import test from '../views/test.vue'
import world from '../views/world.vue'
import network from '../views/network.vue'
import testnet from '../views/testnet.vue'
import about from '../views/about.vue'
import xx from '../views/xx.vue'
// 定义路由表
const routes = [
  {name: 'home', path: '/', component: home},
  {name: 'person', path: '/person', component: person},
  {name: 'myvue', path: '/myvue', component: myvue},
  {name: 'test',path: '/test',component: test},
  {name: 'world',path: '/world',component: world},
  {name: 'network',path: '/network',component: network},
  {name: 'testnet',path: '/testnet',component: testnet},
  {name: 'about',path: '/about',component: about},
  {name: 'xx',path: '/xx',component: xx}
]

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes //路由表
})

export default router
