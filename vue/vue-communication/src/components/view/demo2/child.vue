<template>
  <div class="child">
    <h2>子组件</h2>
    <p>从父组件接收到的数据是：</p>
    <div>
      Msg:<span class="red">{{sendMsg}}</span>
    </div>
    <div>
      Number:<span class="red">{{sendNum}}</span>
    </div>
    <ul class="red">
      <li v-for="item in sendObj" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sendMsg: {
      type: String,
      required: true
    },
    sendNum: {
      type: Number,
      required: false
    },
    sendObj: {
      //  声明验证 只接收数组或者对象
      validator(val) {
        if (
          Object.prototype.toString.call(val) === "[object Array]" ||
          Object.prototype.toString.call(val) === "[object Array]"
        ) {
            return true
        }
      }
    }
  }
};
</script>

<style>
.red {
  color: red;
}
</style>