<template>
    <div>
      post
    </div>
</template>

<script>
import qs from "qs"

export default {
  name:"posts",
  data(){
    return{

    }
  },
  created(){
    this.$axios.post("/UserInfo/login",
    {
       userName:"czc",
       password:"e10adc3949ba59abbe56e057f20f883e"
    })
    .then(res=>{
      console.log(res.data);
    })
    .catch(error=>{
      console.log(error);
    })
  }
}
</script>

<style>

</style>