<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Events />
    <Formdata />
    <Style />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Events from "./components/Event"
import Formdata from "./components/formdata"
import Style from "./components/style"

export default {
  name: 'App',
  components: {
    HelloWorld,
    Events,
    Formdata,
    Style
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
