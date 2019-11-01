<template>
  <div id="app">
    <!-- 头部 -->
    <v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
// 引入组件  注册组件 调用组件
import header from '@/components/header/header.vue'

export default {
  name: 'App',

  components:{
    'v-header':header
  }

}
</script>

<style>

</style>

