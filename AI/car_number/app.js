// 引入aip的图片分类功能客户端
var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify
var fs = require('fs') //node内置的文件模块
var APP_ID = "17798906"
var API_KEY = "KhnA7NndynpFCZosEl0FllQy"
var SECRET_KEY = "pbu59HdGgsxqsPiusVuOe8IqzF2GrMSI"

// 读取文件需要花费时间 I/O操作 将硬盘的文件读取到内存中  readFileSync()同步执行
// 将图片转化为base64格式
var image = fs.readFileSync('car.jpg').toString("base64")
console.log(image)
// 创建一个AipImageClassifyClient实例
var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);
// carDetect()检测image 回调函数
client.carDetect(image)
  .then(function(result) {
    console.log(result)
  })
  .catch(function(err) {
    console.log(err) 
  })