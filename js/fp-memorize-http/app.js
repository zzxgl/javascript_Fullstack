var Koa = require('koa');
var Router = require('koa-router');
// var koaStatic = require('koa-static')

 
var app = new Koa();
var router = new Router();

// app.use(koaStatic(__dirname))//把磁盘上面的文件路径  映射为 网络url   app1.js->localhost:8090/app1.js
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
  const time = Date.now() + 30000  //获取当前当前时间戳  缓存时间30秒有效
  ctx.set('cache-control','public,max-age=30') //缓存30s有效 public文件的缓存可以在任何一个服务器上面缓存（代理）
//   a -请求> ServerA -> ServerB
  ctx.body = content
})
app
  .use(router.routes())
  .use(router.allowedMethods())  


app.listen(9999,()=>{
  console.log(9999)
})