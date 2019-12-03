<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Dialog/>
    <loading/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Dialog from './components/Dialog'
import loading from './components/loading'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Dialog,
    loading
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
