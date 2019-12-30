// 泛型
// const arr:number[] = [1,2,3,4]  //arr为数组类型 成员也只能为number
// const arr1:Array<number| string> = [1,2,3,'4']
// function returnItem<T> (para:T):T{  //<>自动捕获开发者传入的参数的类型
//   return para
// }

function Swap<T,U>(tuple:[T,U]) {
  return [tuple[0],tuple[1]]
}
Swap([7,'seven'])

// 泛型变量
function getArrayLength<T>(arg:Array<T>) { 
    // T捕获传入数组里面的成员的类型
  console.log(arg.length)
  return arg
}

// 泛型接口
interface ReturnItem<T> {
  (para:T):T
}

const returnItem:ReturnItem<number> = para => para

// 泛型类
// 泛型约束
type Params = number | string
class Stack<T extends Params> {
  private arr:T[] = []
  public push(item:T) {
    this.arr.push(item)  
  }
  public pop() {
    this.arr.pop()
  }
}

const app = new Stack<number>()
// app.push('true') //报错
// app.push(true)  //报错

// 泛型约束与索引类型
function getVal<T extends object,U extends keyof T>(obj:T,key:U){  //obj={} 空对象
  return obj[key]
}
const a = {
  name:"wn",
  id:1
}
getVal(a,'id') 


// 使用多重类型进行泛型约束
interface FirstInterface {
  doSomethig():number
}
interface SecondInterface {
  doSomethingElse():string
}
interface childInterface extends FirstInterface, SecondInterface {

}
class Demo<T extends childInterface> {
  private genericProperty:T
  useT () {
    this.genericProperty.doSomethig()
    this.genericProperty.doSomethingElse()
  }
}

// 泛型与new
function factory<T>(type:{new():T}):T {
  return new type()
}
