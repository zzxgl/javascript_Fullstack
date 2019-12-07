const router = require('koa-router')()
const userServies = require('../controllers/mySqlConfig')
const utils = require('../controllers/utils')
router.prefix('/users')  //路由前缀 / => /users

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

// 定义一个路由
router.get('/all', async function(ctx, next) {
  await userServies.getAllusers().then((res) => {
    console.log('打印结果:', + JSON.stringify(res))
    ctx.body = res
  })
})

// 登录 接口
router.post('/userLogin', async(ctx, next) => {
  var _username = ctx.request.body.username
  var _userpwd = ctx.request.body.userpwd
  await userServies.userLogin(_username, _userpwd)
  .then((res) => {
    let r = '';
    // console.log(res)
    if (res.length) {
      r = 'ok';
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: '200',
        data: result,
        mess: '登录成功'
      }
    } else {
      r = 'error';
      ctx.body = {
        code: '404',
        data: r,
        mess: '账号或密码错误'
      }
    }
  })
  .catch((err) => {
    ctx.body = {
      code: '500',
      data: err
    }
  })
})
// 注册 
router.post('/userRegister',async function(ctx,next) {
  var username = ctx.request.body.username
  var nickname = ctx.request.body.nickname
  var userpwd = ctx.request.body.userpwd
  if (!username || !nickname || !userpwd) {
    ctx.body = {
      code:'80000',
      mess:'账号，密码或者昵称不能为空'
    }
  } else {
  await userServies.findUser(username)
  .then(async (res) => {
    console.log(res)
    if(res.length) {
      try {
        throw Error('用户名已存在')
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code:'99999',
        data:'err',
        mess:'用户名已存在'
      }
    } else {
      await userServies.insertUser([username,userpwd,nickname])
      .then((res)=>{
        // console.log(res)
        let r =''
        if(res.affectedRows !== 0) {
          r = 'OK'
          ctx.body= {
            code:'200',
            data:r,
            mess:'注册成功'
          }
        } else {
          r = 'error'
          ctx.body= {
            code:'500',
            data:r,
            mess:'注册失败'
          }
        }
      })
      .catch((error)=>{
        error
      })
    }
  })
}
})

//根据分类名称查找对应的笔记列表 
router.post('/findNoteListBytype',async function(ctx,next){
  var note_type = ctx.request.body.note_type
  await userServies.findNoteListByType(note_type)
  .then(async (res) => {
    let r = ''
    if(res.length) {
      r = 'ok'
      ctx.body ={
        code:'200',
        data: res,
        mess:'查询成功'
      }
    } else {
      r = 'error'
      ctx.body={
        code:'404',
        data:r,
        mess:'查询失败'
      }
    }
  })
  .catch((error) => {
    ctx.body={
      code:'500',
      data:error
    }
  })
})

//根据id查找对应的笔记详情
router.post('/findNoteDetailById', async function(ctx,next){
  var id = ctx.request.body.id
  await userServies.findNoteDetailById(id)
  .then( async(res) => {
    let r = ''
    if(res.length) {
      r ='OK',
      ctx.body = {
        code:'200',
        data: res[0],
        mess:'查找成功'
      }
    }  else {
      r = 'error'
      ctx.body ={
        code:'404',
        data:r,
        mess:'查找失败'
      }
    }
  })
  .catch((err) =>{
    ctx.body ={
      code:'8000',
      data:err
    }
  })
})

// 发布笔记
router.post('/insetNote', async function(ctx, next){
  let c_time = utils.getNowFormateDate()
  let m_time = utils.getNowFormateDate()
  let note_content = ctx.request.body.note_content
  let head_img = ctx.request.body.head_img
  let note_type = ctx.request.body.note_type
  let title = ctx.request.body.title
  let useId = ctx.request.body.useId
  let nickname = ctx.request.body.nickname
  await userServies.insertNote([c_time,m_time,note_content,head_img,note_type,title,useId,nickname])
  .then(async (res)=>{
    let r =''
    if(res.affectedRows !== 0) {
      r = 'OK'
      ctx.body = {
        code:'200',
        data:r,
        mess:'发布成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code:'400',
        data:r,
        mess:'发布失败'
      }
    }
  })
  .catch((error)=>{
    ctx.body = {
      code:'500',
      data:error
    }
  })
})
module.exports = router
