<script >
import { RouterView } from 'vue-router'
import * as THREE from "three";
import VANTA from "vanta/src/vanta.net";
export default {
  data() {
    return {
      vantaEffect: null     
    };
  },
  mounted() {
    this.vantaEffect = VANTA({
      el: "#app",
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      scaleMobile: 1.00
    })
  }
}
</script>

<template>  
  <div id="app">
    <router-view>
     
    </router-view>    
  </div>    
</template>

<style scoped>
#app{
  background-size: cover;
  width: 100%;
  height: 700px;
}
</style>
