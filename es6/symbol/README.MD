### symbol
    - 解决属性名的重复问题
    - 对象的key支持字符串和Symbol
    - Symbol是不可枚举的
    - Object.getOwnPropertySymbols(obj) 获取key为Symbol类型的值
    - 消除魔术字符串
    - Symbol('desc') 描述 .description