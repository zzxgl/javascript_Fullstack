
// const subPub = {
//     'price':[
//         ()=>{console.log(3)},
//         ()=>{console.log(4)}
//     ]
// }
// // price对应的方法执行一遍

// for(let p of subPub.price){
//     p()
// }

// function foo(){
//     console.log('foo')
// }
// subPub.foo = [foo]
// console.log(subPub)
// foo:[foo]
// // 在subPub上面添加一个 value为数组的key (foo)
// // 把foo方法放到数组里面去




class Events{
    constructor(){
        this.listeners ={};
    }
    on(key,fn) {
        if(!this.listeners[key]){
             this.listeners[key] = []
        }
        this.listeners[key].push(fn)
        // this.listeners.push(fn);
    }
    emit(key){
       for(let i=0;i<this.listeners[key].length;i++){
           this.listeners[key][i]()
       }
    }
}

const ev = new Events();
console.log(ev)
ev.on('abc',()=>{
    console.log(1)
});
ev.on('abc',()=>{
    console.log(2)
});
ev.emit('abc');