<template>
  <div id="app">
    <vue-live2d 
      :style="style"
      :model="['Potion-Maker/Pio', 'school-2017-costume-yellow']"
      :direction="direction"
      :size="size"
    />
  </div>
</template>

<script>
import vueLive2d from 'vue-live2d';

export default {
  components: { vueLive2d },
  data(){
    return{
      direction: 'right',
      style: '',
      width: 500,
      height: 500,
      size: 350,
      tips: {
        mouseover: [{
          selector: '.vue-live2d',
          texts: ['这样可以修改默认语句']
        }]
      }
    }
  },
  created(){
    this.tips=this.customTips
  }
};
</script>