<template>
  <div class="a-test">
    AAAAAAAAAAAAAAAAAAAAAAAa
    <testB></testB>
  </div>
</template>

<script>
import b from './B'
export default {
    // 只能从父组件向子组件传递数据
  provide: {
    name:'wn'
  },
  data() {
    return {
    //   name:'蜗牛'  
    }
  },
  components: {
    'testB':b
  }
}
</script>

<style>

</style>