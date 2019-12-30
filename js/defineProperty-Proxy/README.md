### defineProperty
  1. 定义属性
    - value：xxx 指定属性值
    - get set  还可以监听对象属性的改变 
  2. 修改原生API
### Proxy  在目标对象之前 拦截（代理）一层， 对目标对象的访问都经过这一层拦截

### defineProperty 和 Proxy 的对比
  1. defineProperty只能检测对象的属性，而且是用defineProperty 定义上去的属性， 不能检测"未来"的属性
     Proxy 是对整个对象的拦截， 多达13种操作,未来的属性也能被拦截
  2. defineProperty 不能拦截数组，监测不了数组的改变
     Proxy 可以拦截数组 包括(arr[0] 111)


### 元编程 对语言(js) 再编程 修改它的默认行为
  1. proxy 