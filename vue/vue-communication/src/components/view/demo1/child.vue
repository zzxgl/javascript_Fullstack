<template>
  <div class="child">
      <h2>子组件</h2>
      <p>The msg from father is:</p>
      <strong>{{sendMsg}}</strong>
      <p class="hr"></p>
      <p>The ChangeMsg from child is:</p>
      <strong>{{changeMsg}}</strong>
  </div>
</template>

<script>
export default {
  props: ['sendMsg'],
// 计算属性 响应式 数据源（data,props,computed）改动 页面也改变
// 数据源数据存在更新 （update()生命周期）
  computed: {
    changeMsg () {
      return this.sendMsg.toUpperCase()
    }
  },
}
</script>

<style>
.hr{
    margin: 50px 0;
}
</style>