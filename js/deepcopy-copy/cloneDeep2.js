function cloneDeep2(x) {
    const root = {}
    // 栈
    const loopList = [
        {
            parent: root,
            key: undefined,
            data: x
        }
    ]
    while (loopList.length) {
        // 广度优先
        const node = loopList.pop()
        const parent = node.parent
        const key = node.key
        const data = node.data
        let res = parent //{}
        // 初始化赋值目标， key为undefined拷贝到父元素 只拷贝父元素
        if (typeof key !== undefined) {
            res = parent[key] = {}
        }
        for (let k in data) {
            if (data.hasOwnProperty(k)) {
                if (typeof data[k] === 'object') {
                    // 进行下一次循环
                    loopList.push({
                        parent: res,
                        key: k,
                        data: data[k]
                    })
                } else {
                    res[k] = data[k]
                }
            }
        }
    }
    return root
}
let a = {
    name:'wn',
    book: {
        title:"You Don't Know Js",
        price: 45
    }
}
let b = cloneDeep2(a)
a.name = 'www'
a.book.price = '55'
console.log(b)