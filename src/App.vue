<script>
import { RouterView } from 'vue-router'
import * as THREE from "three";
import VANTA from "vanta/src/vanta.net";
import AppHeader from './components/Header.vue'

export default {
  components: { AppHeader },
  data() {
    return {
      vantaEffect: null,
      headerNav: [
        { label: '首页', to: '/' },
        {label:'testnet',to:'/testnet'},
        {label:'network',to:'/network'},
        {label:'about',to:'/about'}
      ]
    };
  },
  mounted() {
    // this.vantaEffect = VANTA({
    //   el: "#app",
    //   THREE: THREE,
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: false,
    //   scale: 1.0,
    //   scaleMobile: 1.00
    // })
  },
  methods: {
    onNavClick(item) {
      // emit navigation or use router
      if (item && item.to) {
        this.$router && this.$router.push(item.to)
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <app-header :nav-items="headerNav" @nav-click="onNavClick"/>
    <router-view />
  </div>
</template>

<style scoped>
#app{  
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
