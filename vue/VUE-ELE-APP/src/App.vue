<template>
  <div id="app">
    <!-- 头部 -->
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
// 引入组件  注册组件
import header from '@/components/header/header.vue'

export default {
  name: 'App',
  
  components:{
    'v-header':header
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

