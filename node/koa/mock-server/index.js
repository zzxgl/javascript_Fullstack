const Koa = require('koa')
const KoaRouter = require('koa-router')
const fs = require('fs')
const app = new Koa()
const router = new KoaRouter({prefix: '/api'})
// app.use 加载一个 中间件  request => middleWare1 => middleWare2 => response
// ctx: {request, response }
// app.use(async (ctx) => {
//   ctx.body = {
//     code: 200,
//     msg: 'ok'
//   }
// })
app.listen(3000, ()=> {
  console.log('server is running http://localhost:3000')
})

// 以get方式请求的路由
// lohost:3000/api/user
router.get('/user', async (ctx) => {
    // 代码读取同步 阻塞状态
  let userInfo = fs.readFileSync('./api/user.json').toString()
  ctx.body = {
    data: JSON.parse(userInfo),
    code:200
  }
})
const glob = require('glob')
const path = require('path')
// path.resolve 路径的拼接 路径的解析
// 读取到api下面所有后缀为.json的文件路径
glob.sync(path.resolve('./api/','*.json')).forEach((item, i) => {
  console.log('item',item) //  /api/user.json
  let apiJsonPath = item && item.split('/api')[1]  // /user.json
  let apiPath = apiJsonPath.replace('.json','')
  router.get(apiPath, async (ctx) => {
    let fileData = fs.readFileSync(item).toString()
    ctx.body = {
        data: JSON.parse(fileData),
        code:200
      }
  })
})
app.use(router.routes()).use(router.allowedMethods())