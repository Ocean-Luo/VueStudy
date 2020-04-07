<template>
  <div>
    <ul>
      <li><router-link :to="urlData.hello">hello</router-link> </li>
       <li><router-link :to="{path:'/hello'}">hello</router-link> </li>
      <li><router-link :to="urlData.helloluoyang">helloluoyang</router-link></li>
    </ul>

  </div>
</template>

<script>
export default {
  name:"navlist",
  data(){
    return{
        urlData:{
          hello:"/hello",
          helloluoyang:"/helloluoyang"
        }
    }
  }
}
</script>

<style scope>
ul{
  list-style: none;
  text-align: center;
}
  ul li{
    display:inline-block;
    margin:0,20px;
  }
</style>