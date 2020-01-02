// 模块化 node原生支持的模块化方案 commonjs 
// const express = require('express')  //引入express
// node中使用es6模块化 
import express from 'express'  //es6模块化方案 import ...from
import router from './routes/index.js'
const  app = express()
app.listen(3000)  //监听端口
router(app)
module.exports = app  //app.js作为一个模块输出