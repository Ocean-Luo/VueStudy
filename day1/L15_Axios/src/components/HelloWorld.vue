<template>
  <div class="hello">
    <div>
     
    </div>
  </div>
</template>

<script>
var Mock= require("mockjs");
var Random=Mock.Random;

var data=Mock.mock({
    'name|1': Random.cname()
})

var data2= Mock.mock({
  'success':true,
  'msg':'',
  'banner':[
    {
      'title':'我在爱尔兰',
      'content':'xxxxxx',
      'img':'www.baidu.com'
    }
  ]
})

console.log(JSON.stringify(data2,null,4))


export default {
  name: 'HelloWorld',
  data () {
    return {
      newsData:[]
    }
  },
  // created(){
  //   // /api/SimpleSection/1
  //   var url=this.Host + '/Weather/Query';
  //   this.$axios.get(url,{
  //     params:{
  //       key :"5690f6f0d68e45d5a15e5d4287a19f51",
  //       cityname :"武汉",
  //     }
  //   }
  //   )
  //   .then(res=>{
  //     console.log(res.data);
  //   })
  //   .catch(error=>{
  //     console.log(error);
  //   })
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
