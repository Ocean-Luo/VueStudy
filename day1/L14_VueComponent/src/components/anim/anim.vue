<template>
  <div>
    <button @click="showHide">过度</button>
    <transition name="fade">
      <p v-show="show">哈哈</p>
    </transition>

    <button @click="showHideAnim">动画</button>
    <transition name="hello">
      <p v-show="showAnim">嘿嘿</p>
    </transition>

    <button @click="animLibs">动画库</button>
    <transition name="world" enter-active-class="animated flip"
    leave-active-class="animated flip">
      <p v-show="libs">呵呵</p>
    </transition>

  </div>
</template>

<script>
export default {
  name:"anim",
  data(){
    return{
      show:true,
      showAnim:true,
      libs:true
    }
  },
  methods:{
    showHide(){
      this.show=!this.show;
    },
    showHideAnim(){
      this.showAnim=!this.showAnim;
    },
    animLibs(){
        this.libs=!this.libs;
    }
  }
  
}
</script>

<style>
/* .fade-enter-active, .fade-leave-active{
  transition: opacity .5s
}
.fade-enter, .fade-leave-to{
  opacity : 0
} */

.fade-enter , .fade-leave-to
{
    transform:translate(100px,0)
}
.fade-enter-active, .fade-leave-active {
  /* transition: opacity 1s; */
  transition: all .5s
}
.fade-enter-to ,.fade-leave{
  /* opacity: 1; */
  transform: translate(-0px,0);
}

.hello-enter-active{
    animation: bounce-in 1s ease;
}
 .hello-leave-active{
    animation: bounce-out 1s ease;
 }

@keyframes bounce-in {
  0%{
    transform: scale(0);
  }
  50%{
    transform:scale(1.5);
  }
  100%{
    transform:scale(1);
  }
}

@keyframes bounce-out {
   0%{
    transform: scale(1);
  }
  50%{
    transform:scale(1.5);
  }
  100%{
    transform:scale(0);
  }
}

p{
  font-size: 30px;
}
</style>