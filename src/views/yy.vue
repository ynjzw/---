<template>
    <div id="test">
      <button @click="test()" >dd</button>
    </div>
</template>

<script >
import {ref} from 'vue'
import { getNodes,getLinks,getTest,getAIRes } from '../api/api';

export default{
  
  methods:{
    test(){
      getLinks().then(res =>{
        res=res.map(item=>{
          return {
            ...item,
            from:item['test']
          }
        })
        res.map(item=>{
          delete item.test
        })

        console.log(res)
        
      })   
    }
  }
}
</script>