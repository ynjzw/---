<template>
    <div id="test">
      <button @click="test()" >dd</button>
    </div>
</template>

<script >
import {ref} from 'vue'
import { getNodes,getLinks,getTest,getAIRes } from '../api/api';

export default{
  mounted(){    
      
  },
  methods:{
    test(){
      getTest().then(res =>{
        console.log(res)
      })   
    }
  }
}
</script>