<template>
  <div>
    big
    <keep-alive>
    <component :is="currentView"></component>
    </keep-alive>
    <button @click="changeView">切换组件</button>
  </div>
</template>

<script>
import Small1 from './small1'
import Small2 from './small2'

export default {
  name:"big",
  data(){
    return{
      currentView:"small1",
      flag:true
    }
  },
  components:{
    Small1,
    Small2
  },
  methods:
  {
    changeView(){
      if(this.flag){
          this.currentView="small1";
          this.flag=false;
      }
      else{
          this.currentView="small2";
          this.flag=true;
      }
    }
  }
}
</script>
<style scoped>

</style>