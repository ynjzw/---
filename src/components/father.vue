<template>
  <div>
    <h2>这是父组件</h2>
    <div>
      <button @click="useSonExpose" >使用子组暴露的属性</button>
      <h4>子组件触发父组件接收的值</h4>
      <p>{{receiveMsg}}</p>
    </div>
    <h4>下方是子组件的内容</h4>
    <SonVue ref="sonRef" />
    <hr>
    <h3>路由传入的参数{{route.query.msg}}</h3>
  </div>
</template>

<script setup >

import SonVue from './son.vue';
import { ref } from 'vue';
// 路由接收参数
import {useRoute} from 'vue-router';
const route = useRoute();
// 接收路由传入的参数
let routeMsg = ref('');
if(route.query.msg){
  routeMsg.value = route.query.msg ;
}

// 接收子组件的传入的值
const receiveMsg = ref('');

// 父组件接收子组件暴露的方法，使用子组件的ref
let sonRef = {
  inputVal: 'ww',
  exposeFun: function(name) {
    // 在这里添加你需要的功能
    console.log(name)
  }
};
// 使用子组件暴露的内容
const useSonExpose = () => {
  // 由于ts认为inputVal可能位undefined不能赋值给string的reveiveMsg
  // 因此使用了一个断言
  receiveMsg.value = sonRef.value?.inputVal;

  // 触发子组件暴露的方法
  sonRef.value?.exposeFun('父组件');
}
</script>

<style scoped></style>
