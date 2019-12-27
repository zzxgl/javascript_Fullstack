var Koa = require('koa');
var Router = require('koa-router');
// var koaStatic = require('koa-static')
const md5 = require('md5')

 
var app = new Koa();
var router = new Router();

// app.use(koaStatic(__dirname))//把磁盘上面的文件路径  映射为 网络url   app1.js->localhost:9999/app1.js
router.get('/', (ctx, next) => {  //定义根路由
  // ctx.router available
  ctx.body=`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="/app1.js"></script>
  </body>
  </html>`
})
 
// 强缓存 不会经过服务器  30s内  请求不会走服务器 from memory cache
router.get('/app1.js',async (ctx) => {
  console.log('app1.js请求')
  const fs = require('fs')  //引入fs模块读取文件
  const content = fs.readFileSync('./app1.js','utf8')
  const stat = fs.statSync('./app1.js')
  const etag = md5(content)
  const time = Date.now() + 30000  //获取当前当前时间戳  缓存时间30秒有效
  if (ctx.req.headers['if-none-match'] === etag) {
    ctx.status = 304
    ctx.body = ''
    return 
  }
  if (ctx.req.headers['if-modified-since'] === stat.mtime) {
    ctx.status = 305
    ctx.body = ''
    return 
  }
  ctx.set('cache-control','public,max-age=30') //缓存30s有效 public文件的缓存可以在任何一个服务器上面缓存（代理）
//   a -请求> ServerA -> ServerB
  ctx.set('Etag',etag) //服务器响应 文件唯一资源标识给浏览器
  ctx.set('Last-Modified',stat.mtime)  //服务器响应最新一次的修改文件时间
  ctx.body = content  //响应体
})
app
  .use(router.routes())
  .use(router.allowedMethods())  


app.listen(9999,()=>{
  console.log(9999)
})