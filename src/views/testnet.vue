<template>
  <div>
    <div id="mynetwork" style="height: 400px;"></div>
  </div>
</template>

<script>
import vis from 'vis'
import node from './node_data.json'
import edge from './edge_data.json'
// 需要引入下方这个文件
import  "../../node_modules/moment/dist/locale/zh-cn.js";

export default {
  data() {
    return {
      nodes: new vis.DataSet(node),
      nodes1: new vis.DataSet([
        { id: 'Node 1', label: 'Node 1' , start: '2023-01-02',shape:'circle'},
        { id: 'Node 2', label: 'Node 2' , start: '2023-01-02',shape:'square'},
        { id: 3, label: 'Node 3', start: '2023-01-02' },
        { id: 4, label: 'Node 4' , start: '2023-01-02'},
        { id: 5, label: 'Node 5' , start: '2023-01-02'}
      ]),
      edges: new vis.DataSet(edge),
      options: {
        edges: {
          arrows: 'to',
          color: 'yellow'
        },
      }
    };
  },
  mounted() {
    this.initNetwork();
    
  },
  methods: {
    initNetwork() {
      const container = document.getElementById('mynetwork');
      const data = {
        nodes: this.nodes,
        edges: this.edges
      };
      this.network = new vis.Network(container, data, this.options);
    }
  }
}
</script>

<style>
#timeline {
  width: 100%;
  height: 400px;
  border: 1px solid #ddd;
}
</style>