<template>
  <p>ssss</p>
  <ul>
    <li v-for="book,index in books" :key="index" style="display: block">
      {{index + 1}} - {{book.name}} - {{ book.author }}
    </li>
  </ul>
  <form >
    input name:<input type="text" placeholder="book name" v-model="name"><br>
    input author:<input type="text" placeholder="book author" v-model="author"><br>
    <button @click="xx()">xx</button><br>
    <button @click="loadBooks()">yy</button><br>
  </form>
</template>

<script setup>
import {ref,reactive,onMounted} from 'vue'
import { getBooks,postBook } from '../api/api';
let books=ref([])
onMounted(()=>{    
      getBooks().then(res =>{
        books=res
      })   
})

let name=ref('ss')
let author=ref('cc')
const loadBooks=()=>{
    getBooks().then(res =>{
        books=res
        console.log(books)
      })   
}
let xx = () => {    
    console.log(name.value)
    postBook(name.value,author.value).then(res=>{
        loadBooks()
    })    
}

</script>