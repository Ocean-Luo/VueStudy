<template>
    <div>
      <p v-bind:class="styleObj">哈哈</p>
      <p v-bind:class="[demo1,demo2]"></p>
      <ul>
        <li :class="[{active:index %2 ==0},'info-'+id]" v-for="(name,index) in names" :key="index"> {{name}}</li>
      </ul>
    <div>
      <p :style="stob">哈哈哈</p>
    </div>
    </div>
</template>

<script>
export default {
    name:"style",
    data(){
      return{
        isActive:true,
        isDemo:true,
        demo1:"demo11",
        demo2:"demo22",
        names:['luoyang','luoyao','luojun'],
        id:10,
        stob:{
          color:"red",
          fontSize:"30px"
        }
    }
},
computed:{
  styleObj(){
      return{
        "active":this.isActive
      
    }

  }
}
}
</script>

<style>
  .active{
    color:red;
  }
</style>