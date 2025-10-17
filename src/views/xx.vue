<template>
  <div>
  <div id="mynetwork" style="height: 400px;"></div>
    <div id="timeline"></div>
    </div>
</template>

<script>
import {Network,DataSet,Timeline} from 'vis'
export default {
  data() {
    return {
      nodes: new DataSet(node),
      nodes1: new DataSet([
        { id: 'Node 1', label: 'Node 1' , start: '2023-01-02',shape:'circle'},
        { id: 'Node 2', label: 'Node 2' , start: '2023-01-02',shape:'square'},
        { id: 3, label: 'Node 3', start: '2023-01-02' },
        { id: 4, label: 'Node 4' , start: '2023-01-02'},
        { id: 5, label: 'Node 5' , start: '2023-01-02'}
      ]),
      edges: new DataSet(edge),
      edges1: new DataSet([
        { from: 'Node 1', to: 'Node 2' },
        { from: 'Node 2', to: 'Node 1' },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 5, to: 5 }
      ]),
      options: {
        edges: {
          arrows: 'to',
          color: 'white'
        },
        nodes:{
          font:{color:'red'}
        }
      }
    };
  },
  mounted() {
    this.initNetwork();
    // 创建一个时间轴
    const timeline = new Timeline(document.getElementById('timeline'), {
      start: new Date(),
      end: new Date(Date.now() + 1000 * 60 * 60 * 24 ), // 一周后
    })    
  },
  methods: {
    initNetwork() {
      const container = document.getElementById('mynetwork');
      const data = {
        nodes: this.nodes,
        edges: this.edges
      };
      this.network = new Network(container, data, this.options);
    }
  }
}
</script>