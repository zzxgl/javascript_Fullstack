<template>
  <div class="container">
    <h2>父组件</h2>
    <p>
      从子组件获取的消息为：
      <span class="red">{{getMSg}}</span>
    </p>
    <!-- 父组件接收发散器抛出的方法携带参数 v-on -->
    <child @message = "getMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data() {
    return {
      getMSg:''    
    }
  },
  components: {
    child
  },
  methods: {
    getMsg (e) {
      this.getMSg = e
    }
  },
}
</script>

<style>
.red{
    color: red;
}
</style>