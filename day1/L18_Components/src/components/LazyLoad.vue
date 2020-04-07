<template>
  <div>
    <img v-lazy="imgUrl"/>
      <img v-lazy="imgObj"/>
  </div>
</template>
<script>
export default {
  name:"lazy",
  data(){
    return{
      //引入图片，如果是在js中，必须require进来
        imgObj: {
        src:require('../assets/logo.png'),
        error: require('../assets/error.jpg'),
        loading: require('../assets/loading.gif'),
      },
         imgUrl: require('../assets/logo.png') // String
     
    }
  }
}
</script>

<style>

</style>