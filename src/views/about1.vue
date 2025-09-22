<template>
  <div>
    <h2>这是父组件</h2>
    <div>
      <h4>子组件触发父组件接收的值</h4>
      <p>{{receiveMsg}}</p>
    </div>
    <h4>下方是子组件的内容</h4>
    <AboutVue @onReceiveMsg="onReceiveMsg" />
  </div>
</template>

<script setup >
import AboutVue from './about2.vue';
import { ref } from 'vue';
// 接收子组件的传入的值
const receiveMsg = ref('');
// 子组件触发的方法
const onReceiveMsg = (params) => {
  console.log('接收子组件的值', params);
  receiveMsg.value = params;
}

</script>

<style scoped></style>
