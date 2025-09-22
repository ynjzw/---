<script >
import NeoVis from 'neovis.js'; 
// var neo4j=require("neo4j-driver")
export default {
  data() {
    return {
      viz:{}
    };
  },
  mounted() {
    this.draw()
  },
  methods:{
    draw() {
      const config = {
        container_id: 'viz',
        server_url: 'http://localhost:7474',
        server_user: 'neo4j',
        server_password: 'lintao123',
        labels: {
          "Country": {
            caption: "name",
            
          }
        },
        relationships: {
          "exchange": {
            
          }
        },
        arrows: true,
        hierarchical_sort_method: 'directed',
        initial_cypher: 'MATCH p=()-->() RETURN p LIMIT 25'
      };
    const viz = new NeoVis(config);
    viz.render();
    console.log(viz)
    }
  }
}
</script>

<template>
  <div style="height:100%;" ref="Screen">
    <div class="left" id="viz" ></div>
  </div> 

</template>

<style lang="less" scoped>
</style>

