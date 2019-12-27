// 接口  自己创建类型
const getUserName = (user: User) => {
  user.say = function (words: string) {
    return 'hello world'
  }
}


interface User {  //User创建出来的一种数据类型
  name: string,
  age?: number,  //参数为一个对象时，对象里面的值可能存在也可能不存在时 + ？
  readonly isMale: boolean,
  // say: (words: string) => string,
  say:Say
}

interface Say {
  (words:string):string
}

interface Config {
  width?: number,
  [propName:string]:any // 添加字符串索引签名
}
function CalculateAreas(config:Config):{area:number} {
  let square = 100
  if(config.width) {
    square = config.width * config.width
  }
  return {area:square}
}
// 类型断言
let mySquare = CalculateAreas({widdth:5} as Config)
// 添加字符串索引签名
let mySquare1 = CalculateAreas({widdth:5})
// // 将字面量赋值给另外一个变量
// let options = {widdth:5}
// let mySquare2 = CalculateAreas(options)

// 继承接口 
interface SupperUser {
  getGrade: () => void
}
interface VIPUser extends User, SupperUser {
  broadcast: () => void
}