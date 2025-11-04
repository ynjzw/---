<template>
  <div id="test">
    <div id="part">
      <div id="mynetwork">ddd</div>
      <div id="chart"></div>
    </div>
    <div id="part">
      <textarea id="answer"></textarea>
      <input type="text" placeholder="sss" id="question" />
      <button id="commit" >sss</button>
    </div>
  </div>
</template>

<script>
import { Network, DataSet } from 'vis'
import * as echart from 'echarts'
import node from './node_data.json'
import edge from './edge_data.json'
import screenshot from '../images/screenshot.png'
export default {
  data() {
    return {
      graphData: {
        nodes: [{ id: 'node1' }, { id: 'node2' }],
        links: [{ source: 'node1', target: 'node2' }]
      },
      nodes: new DataSet(node),
      nodes1: new DataSet([
        { id: 'Node 1', label: 'Node 1', start: '2023-01-02', shape: 'circle' },
        { id: 'Node 2', label: 'Node 2', start: '2023-01-02', shape: 'square' },
        { id: 3, label: 'Node 3', start: '2023-01-02' },
        { id: 4, label: 'Node 4', start: '2023-01-02' },
        { id: 5, label: 'Node 5', start: '2023-01-02' }
      ]),
      edges: new DataSet(edge),
      edges1: new DataSet([
        { from: 'Node 1', to: 'Node 2' ,length:100},
        { from: 'Node 2', to: 'Node 1',length:100 },
        { from: 3, to: 4 },
        { from: 4, to: 5 },
        { from: 5, to: 5 }
      ]),
      options: {
        edges: {
          arrows: 'to',
          color: 'white'          
        },
        nodes: {
          font: { color: 'red' },
          image:screenshot
        }
      }
    };
  },
  mounted() {
    this.initNetwork(this.nodes, this.edges);
    // 间隔5秒改变知识图谱
    setTimeout(() => {
      this.initNetwork(this.nodes1, this.edges1)
    }, 5000);
    this.initTimeline()
  },
  methods: {
    initNetwork(node, edge) {
      const container = document.getElementById('mynetwork');
      const data = {
        nodes: node,
        edges: edge
      };
      this.network = new Network(container, data, this.options);
    },
    initTimeline() {
      // 创建一个时间轴
      const element = echart.init(document.getElementById('chart'))
      
      const options = { 
        timeline:{
          data:[
            '2022','2222','1111'
          ]
        }
       }

      element.setOption(options)
    }
  }
}
</script>
<style>
#mynetwork{
  height: 300px;
}
#chart{
  height: 200px;
}
#answer {
  border-color: red;
  width: 500px;
  height: 500px;
}
#question{
  background-color: aliceblue;
  width: 400px;
  margin: 10px;
}
#test {
  display: flex;
}
#part{
  width: 50%;
}
#commit{
  margin: 10px;
  background-color: red;
}
</style>