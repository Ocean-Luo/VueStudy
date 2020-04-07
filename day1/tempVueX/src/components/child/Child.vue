<template>
  <div>
    儿子: {{getcount}} 
    <br/>
    {{title}}
    <button @click="sendMsg">按钮</button>
    <button @click="minus">减</button>
  </div>
</template>

<script>
export default {
  name:'son',
  data(){
    return{
      info:"嗯嗯嗯"
    }
  },
  props:{
    title:{
      type:String,
      default:''
    }
  },
  methods:{
      sendMsg(){
        this.$emit("info",this.info);
      },
      minus(){
          //this.$store.commit("decrese");
          this.$store.dispatch("decrese");
      }
  },
  computed:{
    getcount(){
      return this.$store.getters.getState;
    }
  },
  created() {
    console.log(this.$store);
  }
}
</script>

<style>

</style>