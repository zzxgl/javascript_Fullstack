// let notSure:any = 4 //"4"
// notSure = 'wn'

// let value:any
// value = true
// value = 1
// value ="hello"
// value = Symbol('type')
// value = {}
// value = []
// //-------------------------
// value.foo.bar
// new value()
// new value()
// value[0][1]

// let val:unknown
// val = true
// val = 1
// val = "hello"
// val = Symbol('type')
// val = {}
// val = []
// -----------------------
// val.foo.bar
// val()
// new val()
// val[0][1]

// never  是任何类型的子类型,也可以赋值给任何类型
// 然而没有类型是never的子类型或赋值给never类型
function error(message:string):string{
  throw new Error(message)
}
const empty:never[] = []
// empty.push(1)

// Array
const list:number[] = [1,2,3,4]
const list2:Array<number> = [1,2,3,4]
// const List3:Array<string | number> {
//   0:string,
//   1:number,
//   length:2
// }

// Tuple 元组  指定哪些类型 就得放哪些类型，不能少也不能多 ,顺序也不能错
let x:[string, number,boolean]
// x = ['hello',10,false]
// x = ['hello'] //报错
// x = [10,'hello',true] //报错'
// interface Tuple extands Array<string |number>{
//     0:string,
//     1:number,
//     length:2
// }

// object enum枚举
enum Direction{
  center = 1
}
let value:object
value = Direction
value = [1]
value = [1,'hello']
value = {}
