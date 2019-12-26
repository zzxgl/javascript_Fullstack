## 命令行 
  - npm init
  - tsc --init
  - tsc -w  实时监听
### ts中的原始数据类型(基础数据类型)
  1. number
  2. string
  3. boolean
  4. undefined
  5. null
  6. void
  7. Symbol
  8. BigInt 大数整型

### ts中的常见数据类型
  1. unknown 可以赋值，不可以进行操作
  2. any 可以赋值，也可以进行操作
  3. never 是任何类型的子类型 也可以赋值给任何类型
  4. Array  :number[]限定数组的成员只能为number类型  :any[]
            :Array<number> 泛型 
  5. Tuple 元组  指定哪些类型 就得放哪些类型，不能少也不能多 ,顺序也不能错
  6. object
### ts中除了function之外，定义其他的类型都要指明类型
PS:1.js的小数运算 转化成二进制进行计算 再转为十进制输出 会精度缺失
   2.Number.MAX_SAFE_INTEGER 

### enum 枚举 可不可以被遍历 对象默认是可以枚举的