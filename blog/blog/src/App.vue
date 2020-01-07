<template>
  <div id="app">
    <h1>cliverSnail's blog</h1>
    <button @click="showHide">SHOW/HIDEHIGHLIGHTEDPOST</button>
    <BlogPost v-for="blogPost in visibleBlogPosts" :key="blogPost.title" :post="blogPost"></BlogPost>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script lang="ts">
import BlogPost,{Post} from './components/BlogPost.vue';
import { Component,Vue } from 'vue-property-decorator';

@Component({  //组件的声明
  components: {
    BlogPost
  }
})
export default class App extends Vue {  //业务代码
  private blogPosts:Post[]= [  //私有属性 只能在自己这个类里面调用
    {
      title:'My First BlogPost ever!',
      body:'welcome to my blog',
      author:'snail',
      datePosted:new Date(2020,0,7)
    },
    {
      title:'My Second BlogPost ever!',
      body:'welcome to my blog',
      author:'snail',
      datePosted:new Date(2020,0,8),
      highlighted:true,
    },
    {
      title:'My Third BlogPost ever!',
      body:'welcome to my blog',
      author:'snail',
      datePosted:new Date(2020,0,9)
    }
  ]
  public showHighlighted:boolean = true
  get visibleBlogPosts () {
    return this.blogPosts.filter((post:Post) => {
      return post.highlighted === undefined || post.highlighted === this.showHighlighted
    })
  }
  public showHide () {
    this.showHighlighted = !this.showHighlighted
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
