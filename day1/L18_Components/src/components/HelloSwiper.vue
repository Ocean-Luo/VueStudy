<template>
  <div>
     <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
  </div>
</template>

<script>
export default {
  name:'swiper',
     data () {
      return {
        //banners: [ '../static/vuepic.jpg', '../static/vuepic3.jpg', '../static/vuepic2.jpg' ],
        banners:'',
        swiperOption: {
          autoplay:true,
          pagination: {
            el: '.swiper-pagination'
          },
          // ...
        }
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.mySwiper)
      this.mySwiper.slideTo(3, 1000, false)
    },
    //https://www.veer.com/photo/140997572
     created(){
       var url= this.Host + '/Weather/Query';
    this.$axios.get(url,{
      params:{
        key :"5690f6f0d68e45d5a15e5d4287a19f51",
        cityname :"武汉",
      }
    })
    .then(res=>{
      var arr=new Array();
      arr.push(res.data);
      console.log(arr);
      this.banners= arr;
    })
    .catch(error=>{
      console.log(error);
    })
     }
}
</script>

<style scoped>
img{
  width:300px;
  height:300px;
}
</style>