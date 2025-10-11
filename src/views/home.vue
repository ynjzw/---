<script >
export default{
  data(){
    return{
      count:0,
      books:[],
      inputBook:{
        "name":'',
        "author":""
      }
    }
  },
  methods:{
    
  }
}
</script>

<template>
  <div class="taiji">
        <img class="person" src="../images/person.gif" @click="this.$router.push({name:'person'})">
        <img class="world" src="../images/world.gif" @click="this.$router.push({name:'world'})">
  </div>
</template>


<style lang="less" scoped>

*{margin: 0;padding: 0;}
    
.taiji{
    width: 400px;
    height: 400px;
    left:35%;
    top:15%;
    background-color: #000;
    border: 0px solid #fff;
    border-radius: 50%;
    background: linear-gradient(to right,black 50%,white 50%);
    position: relative;
    animation: rota 10s linear infinite;
    opacity: 50%;
}
.taiji:hover{
    animation-play-state: paused;
}
.person{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: -webkit-radial-gradient(center,white 20%,black 20%);
    position: absolute;
    top: 0;
    left: 100px;
}
.world{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: -webkit-radial-gradient(center,black 20%,white 20%);
    position: absolute;
    bottom: 0;
    left: 100px;
}

@keyframes rota {
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
}

</style>

