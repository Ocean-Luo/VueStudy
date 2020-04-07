<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>

    <div>
      <p v-if="show">我是否能被看见</p>
      <p v-else>我是if为false能看到的</p>
    </div>
    <div v-show="show">我是v-show</div>

    <div class="list">
      <ul>
        <li v-for="(name,index) in names" v-bind:key="index">{{index}}:{{name}}</li>
      </ul>
      <ul>
        <li v-for="(item,index) in user" v-bind:key="index">
          <span>{{item.name}}</span>
          <span>{{item.age}}</span>
        </li>
      </ul>
    </div>
    <button v-on:click="num+=1">按钮</button>
    <p>{{num}}</p>
    <button v-on:click="handlerClick">事件按钮</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:false,
      names:['luoyang','luoyao','luojin'],
      user:[
        {
          id:1,
          name:"luoyang",
          age:19
        },
        {
          id:2,
          name:"luoyao",
          age:20
        },
        {
          id:3,
          name:"luojin",
          age:21
        },
      ],
      num:1,
    }
  },
  methods:{
    handlerClick(){
      console.log(this);
        this.show =!this.show;
    }
  }

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
</style>
