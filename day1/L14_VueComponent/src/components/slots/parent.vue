<template>
    <div>
      父组件
      <Child>
        <p slot="s1" class="ptest">我是插槽1</p>
        <p>哈哈</p>
        <p slot-scope="key" slot="s2" class="ptest">
            {{ key.text }}
        </p>
      </Child>
    </div>
</template>

<script>
import Child from "./child"

export default {
  name:"parent",
  data(){
    return{
       
    }
    
  },
  components:{
    Child
  }
  
}
</script>

<style scope>

</style>