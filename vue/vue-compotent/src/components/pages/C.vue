<template>
  <div class="c-test">
    CCCCC
    <div>
      Age:{{app.userInfo.age}}
      <button @click="changeApp">change</button>
    </div>
  </div>
</template>

<script>
export default {
  inject:['app'],
  methods: {
    changeApp() {
      app.userInfo.age = 16
    }
  },
}
</script>

<style>

</style>