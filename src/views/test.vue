<template>

<!-- ref 用于在组件中引用当前的 DOM 元素。-->
<div id="3d-graph"></div>
</template>
<script setup>
import {onMounted, ref} from "vue";
// import ForceGraph3D from "3d-force-graph";
const N = 300;
const gData = {
  nodes: [...Array(N).keys()].map(i => ({ id: i })),
  links: [...Array(N).keys()]
    .filter(id => id)
    .map(id => ({
      source: id,
      target: Math.round(Math.random() * (id-1))
    }))
};

// const Graph = new ForceGraph3D(document.getElementById('3d-graph'))
//     .graphData(gData);
</script>
<style scoped></style>