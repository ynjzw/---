<template>
  <div>
    <h3>这是子组件接收的父组件信息</h3>
    <input v-model="inputVal" placeholder="请输入传给父组件的值" />
    <button @click="sendMsg">点击传值给父组件参数</button>
  </div>
</template>

<script setup >
import { ref } from 'vue'
const inputVal = ref('');
// 子组件通过defineEmits触发父组件的方法
// 非ts的用法
const emit = defineEmits(["onReceiveMsg"]);
const sendMsg = () => {
  // 传input值给父组件
  emit("onReceiveMsg", inputVal.value);
}

</script>

<style scoped></style>
