<template>
  <div class="header">
    <div class="header-left">
      <div class="header-input">
        <input type="text">
      </div>
      <div class="header-right">
         {{ this.city }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: '南昌'
    }
  }
}
</script>

<style>

</style>
