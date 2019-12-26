function greeter(person:string) { //形参指定类型  基础数据类型首字母不需要大写
  return "hello" + person
}
const user = "Jane User"
console.log(greeter(user))