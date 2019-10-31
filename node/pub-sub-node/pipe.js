const fs = require('fs')
// // stream  pipe是stream模块上面的方法
// // fs 文件操作 模块


// 流 读一点，写一点 
// fs.createReadStream('./31877402.mp3').pipe(
//     fs.createWriteStream('/copy.txt')
// )


// data 文件一次性全部读完放在内存里面 在将读完的内容一次性全部写到指定文件
fs.readFile('./31877402.mp3',(err,data)=>{
    fs.writeFile('/music.mp3',data,(err,res)=>{
        if(!err){
            console.log("writed!!!")
        }
    })
})