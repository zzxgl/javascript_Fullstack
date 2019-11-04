//events是node内部的内置模块 也是实现其他模块的基础
//工程化
const Events = require('events')
const ev = new Events();

// 订阅 price自定义的名字 
ev.on('price',(b)=>{
    console.log(b,'涨价了')
})
ev.on('price',(a)=>{
    console.log(a,'涨价了')
})
//发布
ev.emit('price','猪肉','鸡肉');