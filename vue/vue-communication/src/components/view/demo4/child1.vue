<template>
  <div class="child">
    <h3>兄弟组件1(监听兄弟组件2)</h3>
    <div>
      这是从兄弟组件2里面拿来的数据:{{msg}}
    </div>
  </div>
</template>

<script>
import Bus from '@/assets/bus'
export default {
//  
  data() {
    return {
      msg:''    
    }
  },
  mounted() {
    // $emit $on
    Bus.$on('test',(data) => {
      this.msg = data
    })
  },   
}
</script>

<style>

</style>