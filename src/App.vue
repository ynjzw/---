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
        { label: '关于', to: '/about' }
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
    },
    onSearch(q) {
      console.log('search', q)
    }
  }
}
</script>

<template>
  <div id="app">
    <app-header :title="'前后端分离前端'" :nav-items="headerNav" :show-search="true" @nav-click="onNavClick" @search="onSearch" />
    <router-view />
  </div>
</template>

<style scoped>
#app{
  background-size: cover;
  width: 100%;
  height: 700px;
}
</style>
