// let a = 'wn'
// let b = a
// a = "蜗牛"
// console.log(b) //wn
// 基础数据类型 赋值操作深拷贝 不会影响

// let a = {
//     name:'wn',
//     book: {
//         title:"You Don't Know Js",
//         price: 45
//     }
// }
// let b = a
// a.name = '蜗牛'
// a.book.price = 55
// console.log(b)
// 引用类型 赋值操作为浅拷贝  会影响

//深拷贝浅拷贝
// let a = {
//     name:'wn',
//     book: {
//         title:"You Don't Know Js",
//         price: 45
//     }
// }
// let b = Object.assign({},a)
// a.name = '蜗牛'
// a.book.price = 55

// let b = {...a}
// console.log(b)


//深拷贝 浅拷贝
// let a =[0,'1',[2,3]]
// let b = a.slice(1)
// console.log(b) //['1',[2,3]]
// a.push(1)
// a[2][0]=4
// console.log(b) //['1',[2,3]]

let a = {
    name:'wn',
    book: {
        title:"You Don't Know Js",
        price: 45
    }
}
// console.log(a.hasOwnProperty('name'))
let b = JSON.parse(JSON.stringify(a));
a.name = '蜗牛'
a.book.price = 55 
console.log(b) //a

