<template>
  <button :class="'i-button-size'+size" @click="handleClick">
    <slot name="icon"></slot>
    /
    <slot></slot>
  </button>
</template>

<script>
function oneOf(val, arr) {
  for(let i=0; i<arr.length;i++){
    if(arr[i] === val) {
      return true
    }
  }
  return false
}
export default {
  props:{
    size:{
    //   type:String,
    // 校验从父组件 接收过来的参数是否在[]中
      validator(value) {
        return oneOf(value,['small','large','default'])
      },
      default:'default'
    }
  },
  data() {
    return {
      message:'子组件里面的内容'
    }
  },
  methods: {
    handleClick () {
      this.$emit('onClick')
    },
    sureClick () {
      this.$emit('transfor', this.message)
      console.log('确认')
    }  
  },
}
</script>

<style>
button{
  border: 1px solid olivedrab;
  background-color: blanchedalmond;
  color: #852;
  border-radius: 3px;
}
.i-button-sizelarge{
  padding: 18px 24px
}
.i-button-sizedefault{
  padding: 10px 18px
}
.i-button-sizesmall{
  padding: 8px 12px
}
</style>