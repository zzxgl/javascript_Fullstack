// 浅拷贝 只能把被拷贝的对象自身属性拷贝到（不拷贝原型链上面的）
function cloneDeep(source) {
    if(typeof source !== 'object'){return source}
    var target = Array.isArray(source) ? [] : {}
    for( var key in source) {
        if(Object.prototype.hasOwnProperty.call(source,key)){
            if(typeof source[key] === 'object') {
                target[key] = cloneDeep(source[key])
            }
            else {
                target[key] = source[key]
            }
        }
    }
    return target
}
// let a = {
//     name:'wn',
//     book: {
//         title:"You Don't Know Js",
//         price: 45
//     }
// }
let a =[0,'1',[2,3]]
let b = cloneDeep(a)
a.push(4)
a[2][1]=5
console.log(b)