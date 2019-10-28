### Map 
    - 为什么es6要增加Map
      1.以前的key  只支持字符串         Object.keys(map)获取对象上的key值 数组
      2.以前的key  无序的
    - Map 有什么用？
      1.新的数据结构 键值对
      2.优化if else  利用键值对的关系
    - 基本语法
        - 添加key值和value值 
            map1.set('key1','value1')
        - 获取value值
            map1.get('key1')
        - 判断对象上面有没有key值
            map1.has('key1')
        - 获取对象上所有的key值 
            map1.keys()
        - 获取对象上所有的value值
            map1.values()
        - 获取对象上所有的键值对
            map1.entries()
        - 删除某个key值
            map1.delete('key1)
        - 清空Map对象
            map1.clear()

### 扩展运算符 ...  把一个数组（类数组）打散，把一堆数据整理为数组
    

    - for in 遍历数组
    - for of 遍历数组和Map
    