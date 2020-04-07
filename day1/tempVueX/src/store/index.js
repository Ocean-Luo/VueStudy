import Vue from "Vue"
import Vuex from "Vuex"

Vue.use(Vuex)

//创建一个store仓库
export default new Vuex.Store({
  state:{
    count:10
  },
  mutations:{
    increment(state){
      state.count++;
    },
    decrese(state){
      state.count--;
    }
  },
  actions:{
    //context:承接上下文
    increment(context){
      setTimeout(function(){
        context.commit("increment");
      },1000)
        
    },
    decrese(context){
      setTimeout(function(){
      context.commit("decrese");
      },1000)
    }
  },
  getters:{
    getState(state){
      return state.count >0 ? state.count:0
    }
  }

})