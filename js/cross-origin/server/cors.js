const http = require('http')
// 创建一个代码执行的环境
http.createServer((req, res) => {
    console.log(req.url, req.method)
    // 设置一组响应头
    res.writeHead(200, {
        'content-Type': 'application/json',
        // * 所有的源都能访问我
        'Access-Control-Allow-Origin': '*',
        // 类似安全令牌
        'Access-Control-Allow-Headers': 'X-auth, content-type',
        // 支持请求的方式
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTION',
        'Access-Control-Allow-Credengtials': true // 允许 携带cookie 传输
    })
    // cros的
    // res.end(JSON.stringify({
    //     bookName: 'php'
    // }))
    res.end(`
    getBooK(${JSON.stringify({bookName: 'php'})})
    `)
})
// 监听3000端口
.listen(3000, () => {
    console.log('server is running')
})