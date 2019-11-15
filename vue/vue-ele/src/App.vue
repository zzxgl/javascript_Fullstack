<template>
  <div id="app">
    <!-- 头部 -->
    <!-- 父组件向子组件传递数据 header -->
    <v-header :seller = "seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"/>
    <!-- 所有的页面都是APP.vue 的路由组件 goods就能拿到seller这个数据-->
    <!-- 通过路由入口来传递 可以传值通过路由入口展示的路由组件-->
  </div>
</template>

<script>
// 引入组件  注册组件 调用组件  提高复用
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {
      }
    }
  },
  created () {
    this.$http.get('http://localhost:8080/static/seller.json').then(res => {
      console.log(res)
      if (res.data.errno === 0) {
        // this.seller = res.data.data()
        // 合并对象 Object.assign(this.seller,res.data.data) 合并两个对象
        this.seller = Object.assign({}, this.seller, res.data.data)
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>
<style lang="stylus">
@import './common/stylus/mixin.styl';
  .tab
    display flex
    height 40px
    line-height 40px
    width 100%
    border-1px(rgba(7,17,27,.1))
    &-item
      flex 1
      text-align center
      a
        text-decoration none
        display block
        font-size 14px
        color rgb(77,85,93)
        font-weight bold
        &.router-link-active
          color rgb(240,20,20)
</style>
