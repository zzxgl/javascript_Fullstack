var http = require('http')
var fs = require('fs')

// 创建一个服务
var server = http.createServer(function (req, res) {
  res.writeHead(200, {"Content-Type": "text/html"})
//   __dirname文件的绝对路径
//  读取文件
  const myreadstream = fs.createReadStream(__dirname + '/views/http_demo.html','utf-8')
  myreadstream.pipe(res)
})

// socket
var io = require('socket.io')(server)

// io 连接
io.on("connection",function (socket) {
  console.info('一个socket连接成功了')
  // 接收前端页面上面抛出方法和参数
  socket.on('link_to_server', function (msg){
    console.info(`我收到一个问题${msg}`)
    // socket.emit('link_to_client','张张最帅')
    // 抛出一个方法将接收到的参数作为抛出的参数
    io.emit('link_to_client',msg)
  })
})

server.listen(8888, '127.0.0.1')
console.log('server is running...')