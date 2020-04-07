<template>
  <div id="app">
    <HelloWorld/>
    <Hello />
    <MyComponent/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MyComponent from './components/myComponent'
import Parent from './components/slots/parent'
import Parents from './components/sonparent/parent'
import Big from './components/comkeep/big'
import Aima from "./components/anim/anim"
import Hello from './components/hello'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyComponent,
    Parent,
    Parents,
    Big,
    Aima,
    Hello

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
