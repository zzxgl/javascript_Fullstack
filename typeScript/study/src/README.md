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
   2. Number.MAX_SAFE_INTEGER 

### enum 枚举 可以被遍历 对象默认是可以枚举的
  1. 异构枚举
  2. 反向映射  key<=> value 可以通过value值获取key值
  3. 联合枚举
  4. 枚举对象的合并

### interface 关键字 定义接口 创建数据类型   变量的类型
  1. readonly 将属性修改为 只读属性
  2. 不确定参数对象中某个属性是否存在， 定义接口时添加？
  3. 类型断言  as Config 参数对象中传入的属性接口中没有定义时 as Config 解决
  4. 添加字符串索引签名 在接口中 [propName:string]:any
  5. 继承接口 extends关键字 扩展接口

### class 关键字  类
   1. 抽象类 无法被实例化 可以继承
       优点：原始类不会被修改
   2. 访问限定符 
        public  可以被实例使用
        private 只能在类的内部使用
        protected 在类的内部和子类中使用
   3. class可以作为接口
### function 函数
   1. 函数可以不用声明类型
   2. 参数问题
        支持默认参数
        某个参数不确定存在不存在时，？
        参数个数不确定时，...rest
   3. 重载  限定参数