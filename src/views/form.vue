<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="username">用户名：</label>
      <input id="username" v-model="form.username" type="text" required />
    </div>
    <div>
      <label for="email">邮箱：</label>
      <input id="email" v-model="form.email" type="email" required />
    </div>
    <div>
      <label for="password">密码：</label>
      <input id="password" v-model="form.password" type="password" required />
    </div>
    <button type="submit">提交</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  username: '',
  email: '',
  password: ''
})

function handleSubmit() {
  // 这里可以处理表单提交逻辑，比如发送请求
  console.log('提交数据:', form)
}
</script>