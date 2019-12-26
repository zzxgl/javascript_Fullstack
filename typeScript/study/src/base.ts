// const isLoading:boolean = false
const decLiteral:number = 6
const hexLiteral:number = 0xf00d  //不管多少进制 类型都是number

const book:string = '深入浅出 TypeScript'

// void空类型  当有一个方法 不能支持返回值 return 
function use(): void{
  console.log('wn')
}

const a:void = undefined  // void 和 undefined 当一个对象是undefined类型时，可以修改为void类型

const b= null

let u:undefined = undefined  //Any类型  undefined类型
let n:null = null  // Any类型  null类型

const syml = Symbol('key1')
const sym2 = Symbol('key2')
Symbol('key1') === Symbol('key1')   //false Symbol是唯一的

// const max = Number.MAX_SAFE_INTEGER
// const max1 = max + 1
// const max2 = max + 2
// max1 === max2 //true

// const max = BigInt(Number.MAX_SAFE_INTEGER)
// const max1 = max + 1n
// const max2 = max + 2n
// max1 === max2 //false


