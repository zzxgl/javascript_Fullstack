const a = {
    b: 1
}
function fn() {
    console.log('a的值发生改变了',a.b)
}
function bindData() {
    //返回a对象上面的键名
    Object.keys(a).map(key => {
        let v = a[key]
        // 监听对象 可设置或者修改对象的属性
        Object.defineProperty(a, key, {
            // 读取属性时自动调用的方法  
            get() {
                console.log('正在读取a里面的值')
                return v
            },
            // 写入属性时自动调用的方法
            // 必须带一个参数 代表被写入的属性值
            set(newVal) {
                v = newVal
                fn()
            }
        })
    }) 
}
bindData()
console.log(a.b)
a.b = 123
a.c = 0
console.log(a.b)
console.log(a.c)
a.c = 1
console.log(a.c)