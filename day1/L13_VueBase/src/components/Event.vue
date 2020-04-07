<template>
    <div class="event">
      <ul>
      <li v-on:click.once="getItemInfo(index,$event)" v-for="(name,index) in names" v-bind:key="index">{{name}}</li>
      </ul>
      <input type="text" @keyup.enter="getKeyInfo($event)">
      <button @click="pushArr">按钮</button>
      <button @click="getOdd">我也奇数</button>

      <div>
        <p>{{ msgReVerse }}</p>
      </div>
    </div>
</template>

<script>
  export default{
    data(){
      return{
          names:["luoyang","luoyao","luojin"],
          nums:[1,2,3,4,5,6,7],
          message:"10"
      }
    },
    methods:{
      getItemInfo(index,event){
          console.log(this.names[index]);
          console.log(event);
      },
      getKeyInfo(event){
          console.log(event);
      },
      pushArr(){
        // this.names.push("libai");
        this.names.concat(["libai"]);
      },
      getOdd(){
        this.nums.filter(function(num){
          if(num % 2 !== 0)
          console.log(num);
          return num %2 !==0;
        })
      }
    },
    computed:{
       msgReVerse(){
         return this.message.split('').reverse().join('');
       }
    }
  }
</script>

<style>

</style>