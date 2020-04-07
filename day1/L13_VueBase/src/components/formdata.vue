<template>
    <div>
       <input type="text" v-model="msg">
       <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    name:"formdata",
    data(){
      return{
        msg:"hello",
        message:"hello"
      }
    },
    watch:{
      msg:function(data){
        setTimeout(()=>{
            this.message=data;
        },1000);
        
      }
    }
}
</script>

<style>

</style>