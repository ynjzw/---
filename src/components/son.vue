<template>
  <div>
    <h3>这是子组件接收的父组件信息</h3>
    <p>{{props.msg}}</p>
  </div>
</template>

<script setup >
// defineProps 接收父组件传入的值，使用方式分为ts的用法和非ts的用法
// 非ts的用法
import { ref } from 'vue';
import { defineProps } from 'vue';
const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
});

</script>

<style scoped></style>
