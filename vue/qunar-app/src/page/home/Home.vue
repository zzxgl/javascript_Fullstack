<template>
  <div>
    <home-header/>
    <home-swiper :list="swiperList"/>
  </div>
</template>

<script>
import Header from './Header'
import Swiper from './Swiper'
import axios from 'axios'
export default {
  data () {
    return {
      swiperList: []
    }
  },
  mounted () {
    axios.get('/static/mock/index.json')
      .then(res => {
        if (res.data) {
          this.swiperList = res.data.data.swiperList
        }
      })
  },
  components: {
    HomeHeader: Header,
    HomeSwiper: Swiper
  }
}
</script>

<style lang="scss">
  @import "../../assets/style/varibale.scss";
  .home{
    background: $homeBgColor
  }
</style>
