const Events = require('events')
const ev = new Events();

ev.on('price',()=>{
    console.log(111)
})
ev.on('price',()=>{
    console.log(222)
})
ev.emit('price')
console.log(ev)