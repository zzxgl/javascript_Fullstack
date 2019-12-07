<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  provide(){
    return {
      app:this
      // 将app.vue的this作用域往外抛 所有的页面都能拿到app里面的数据
    }
  },
  name: 'App',
  data() {
    return {
      userInfo:{
        name:'aaa',
        age:18,
        sex:'bot'
      }
    }
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
