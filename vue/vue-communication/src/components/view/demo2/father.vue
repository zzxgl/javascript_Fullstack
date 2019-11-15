<template>
  <div class="conteiner">
    <div>
      <!-- <ul class="red">
          <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
      </ul> -->
      <child :send-msg = "myMsg" :send-num = "myNum" :send-obj = "myObj"></child>
    </div>

  </div>
</template>

<script>
import child from './child'
export default {
  data() {
    return {
      myMsg: "我是父组件的信息",
      myNum: 123,
      myObj: [
        {
          id: 1,
          name:'lis'
        },
        {
          id: 2,
          name:'zhans'
        }
      ]      
    }
  },
  components: {
    child
  }
}
</script>

<style>

</style>