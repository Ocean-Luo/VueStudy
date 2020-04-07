<template>
  <div>
    外面 {{ getcount}}
    <button @click="add">加</button>
  </div>
</template>

<script>

export default {
  name:"outter",
  data(){
    return{

    }
  },
  computed:{
    getcount(){
      //return this.$store.state.count;
       return this.$store.getters.getState;
    }
  },
  methods:{
    add(){
      //this.$store.commit("increment");
      this.$store.dispatch("increment")
    }
  }
}
</script>

<style>

</style>