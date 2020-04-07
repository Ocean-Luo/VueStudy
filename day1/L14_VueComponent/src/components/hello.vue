<template>
  <div>
    <input type="text" v-focus> 
    <p v-mycss>哈哈</p>
    {{ price | moneyChange}} <br/>
    {{info | contextData}}
  </div>
</template>

<script>

export default {
  name:"hello",
  data(){
    return{
        price:30,
        info:"我是一个文本信息"
    }
  },
  directives:{
    focus:{
      inserted:function(el){
          el.focus();
      }
    },
    mycss:{
      inserted:function(el){
        el.style.color ="red";
      }
    }
  },
  filters:{
    moneyChange(value){
      if(typeof value == "number"){
          return "￥"+value;
      }
      return value;
    },
    contextData(value){
      return value+ new Date();
    }
  }
}
</script>
<style >

</style>