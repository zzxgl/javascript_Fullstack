// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Swipe, SwipeItem, Icon, Field, ActionSheet, Toast, Panel, Uploader} from 'vant'
import 'vant/lib/index.css'
import axios from 'axios'
import  'amfe-flexible'

// use 将（）挂载到Vue的原型链上 this.$()
Vue.use(Swipe).use(SwipeItem).use(Icon).use(Field).use(ActionSheet).use(Toast).use(Panel)

Vue.prototype.$http = axios
// this 获取

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // console.log(to)
  // console.log(from)
  // next() 
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
