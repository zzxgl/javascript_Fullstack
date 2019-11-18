var AipOcrClient = require('baidu-aip-sdk').ocr; //图片识别 ？ 需要从图片中提取文字
var fs = require('fs');
// 文件本身就是二进制文本 所有可以tostring 
var image = fs.readFileSync('./car1.jpg').toString('base64')
var APP_ID = "17799050"
var API_KEY ="2wVtulzWyfFl6AyE5l3DIqtr"
var SECRET_KEY = "cGlUno5cvQpc6fUComO1E9PdqGXbQtkp"
var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)
var options = {} 
client.licensePlate(image, options)
  .then(function(result) {
    console.log(result)
  })
  .catch(function(err) {
    console.log(err)
  })