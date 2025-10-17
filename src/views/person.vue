<template>
  <!-- <VueForceGraph2D :graphData="graphData" /> -->
</template>
<script>
export default {
  // components: { VueForceGraph2D },
   data () {
    return {
      graphData: {
      // nodes: [{ id: 'node1',name:"name1",val:10 ,color: 'red'}, 
      //         { id: 'node2',name:"name2",val:2 }, 
      //         { id: 'node3',name:"name3",val:3 }],
      // links: [{ source: 'node1', target: 'node2',color:'red ' },
      //         { source: 'node2', target: 'node3' }]
      }
    }
  },
  mounted() {
    // this.driver=neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'lintao123'))
  },
  methods:{
    
  }
};
</script>
<style scoped>
#app {
 background-color: #f1e6aa;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
}
</style>