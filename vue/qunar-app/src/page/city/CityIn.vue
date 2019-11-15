<template>
  <div>
    <div class="list">
      <div class="area">
        <div class="cities">
          <div class="city-character-list" v-for="(val,key) of cities" :key="key">
            <div class="title" :ref="key">{{ key }}</div>
            <div class="area-city">
              <div class="city-item border-bottom" v-for="item of val" :key="item.id">
                {{item.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="characters">
      <li class="item" v-for="item of characters" :key="item" @click="handleCharacterClick">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BsScroll from 'better-scroll'
export default {
  data () {
    return {
      cities: []
    }
  },
  methods: {
    handleCharacterClick (e) {
      console.log(e)
      const char = e.target.innerText
      
      this.scroll.scrollToElement(this.$refs[char][0])
      console.log(char)
      console.log(this.$refs) // 获取节点
    }
  },
  computed: {
    characters () {
      return Object.keys(this.cities)
    }
  },
  mounted () {
    // axios.get('/static/mock/city.json')
    // .then((res) => {
    //   this.cities = res
    // })
    // 代理解决跨域 中介
    // npm run dev / npm start => 启动本地服务 webpack-dev-server localhost:8080
    // 反向代理 => 代理的是客户端
    // 配置代理 config/index.js
    this.scroll = new BsScroll(
      document.querySelector('.list')
    )
    axios.get('/api/city.json')
      .then(res => {
        console.log(res)
        this.cities = res.data.data.cities
      })
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/style/varibale.scss";
.list {
  overflow: hidden;
  position: absolute;
  top: 2.22rem;
  left: 0;
  right: 0;
  bottom: 0;
  // 定位 设置宽高 所有的子元素必须要有一个父元素
  .area {
    .title {
      height:.24rem;
      line-height: .24rem;
      font-size: .26rem;
      padding: .24rem .3rem;
      background: $homeBgColor;
    }
    .area-city {
      padding: .1rem .5rem .1rem .24rem;
      overflow: hidden;
      .location-city {
        background: $bgColor;
        color: #fff;
      }
      .city-button {
        float: left;
        height: .4rem;
        line-height: .4rem;
        font-size: .26rem;
        width:29%;
        text-align: center;
        margin: .1rem;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
    .cities {
      .city-character-list {
        .area-city {
          padding: 0;
          .city-item {
            height: .5rem;
            line-height: .5rem;
            font-size: .26rem;
            padding: .1rem .5rem .1rem .34rem;
          }
        }
      }
    }
  }
}
.characters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 2rem;
  bottom: 0;
  right: 0;
  width: .4rem;
  font-size: .24rem;
  font-weight: bold;
  .item {
    color: $bgColor;
    line-height: .4rem;
  }
}

</style>
