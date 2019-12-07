<template>
  <div class="b-test">
    B
    <div>
      {{this.name}}
    </div>
    <div>
      <testC></testC>
    </div>
  </div>
</template>

<script>
import c from './C'
export default {
  inject: ['name'],
  mounted() {
    console.log(this.name)  
  },
  components: {
    'testC':c
  }
}
</script>

<style>

</style>