//events是node内部的内置模块 也是实现其他模块的基础
//工程化
const Event = require('events')
const ev = new Event();
// 订阅
ev.on('price',(a,b,)=>{
    console.log(a,b,'涨价了')
})
ev.on('price',(a,b)=>{
    console.log(a,b,'涨价了')
})
//发布
ev.emit('price','猪肉','鸡肉');