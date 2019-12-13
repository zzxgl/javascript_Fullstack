const Koa = require('koa')
const path = require('path')
const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const Router=require('koa-router')
const views = require('koa-views')
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache')
const config = require('./config/default.js.js')

const app = new Koa()
const router = new Router()

// 后端代码读取到客户端请求的那个路径 执行回调函数 *代表所有路径
router.get('*', (ctx,next) => {
  ctx.body = 'hello world'
  next()
})
app.use(router.routes())

// 做缓存
// __dirname 获取绝对路径 dynamic表示文件夹可以相互交互
app.use(staticCache(path.join(__dirname, './public'),{ dynamic: true },{ maxAge:365*24*60*60 }))
app.use(staticCache(path.join(__dirname, './images'),{ dynamic: true },{ maxAge:365*24*60*60 }))

//配置服务器端模板渲染引擎中间件
app.use(views(path.join(__dirname,'./views'),{ entension: 'ejs'})) 
app.listen(3000)
console.log(`listening on port ${config.port}`)
