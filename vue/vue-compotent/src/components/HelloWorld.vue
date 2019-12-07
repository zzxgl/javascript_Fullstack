<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <i-button size="large" @onClick="btn1">
      按钮
      <i slot="icon">*</i>
    </i-button>
    <i-button size="small" @onClick="btn2">提交</i-button>
    <!-- <div @click="oSure">  
      <i-button ref="sure">确认</i-button>
    </div> -->
    <!--  -->
    <i-button ref="sure" @click.native="oSure" @transfor="showMessage">确认</i-button>
     <div>{{mess}}</div>
  </div>
</template>

<script>
import button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mess:''
    }
  },
  components: {
    'i-button': button
  },
  methods: {
    btn1 () {
      console.log("按钮")
    },
    btn2 () {
      console.log("你好")
    },
    oSure () {
      this.$refs.sure.sureClick()
    },
    showMessage (mess) {
      this.mess = mess
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
