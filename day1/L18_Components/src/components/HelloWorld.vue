<template>
  <div class="hello">
      <div class="block">
    <span class="demonstration">默认 Hover 指示器触发</span>
    <el-carousel>
      <el-carousel-item v-for="(item,index) in picUrl" :key="index">
        <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      picUrl:[
          "/static/vuepic.jpg",
           "/static/vuepic.jpg",
            "/static/vuepic.jpg",
             "/static/vuepic.jpg"

      ],
   
      msg: 'Welcome to Your Vue.js App'
    }
  },
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.el-carousel__item{
  /* width:60%; */

  text-align: center;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }

  .el-carousel__item:img {
     background-color: #d3dce6;
  }

  img{
    display: inline-block;
    max-width:100%;
    width:1200px;
    height:1290px;
  }
</style>
