let http = require('http') //引入http这个核心模块，来创建web服务器
let  fs = require('fs') //操作服务器的资源文件

let server = http.createServer()  //创建一个服务

//server服务监听请求 
server.on('request',(req,res)=> {
    let url = req.url; //前端请求的接口路径
    if(url === '/img') {  //url===某个文件根目录
        fs.readFile('./resource/hy.jpg',(error,data) => {
            if (error) {
            res.setHeader('Content-Type', 'text/plain; charset = utf-8'); 
            res.end('你需要的资源不存在')
        } else {
            res.setHeader('Context-Type','image/jpeg');
            res.end(data)
        }
        })
    }
})

server.listen(3000,()=>{  //监听端口
    console.log('服务器已启动')
})