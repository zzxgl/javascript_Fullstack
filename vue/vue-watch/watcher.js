class watcher {
    constructor(opts) {
        this.$data = opts.data
        this.$watch = opts.watch
        // 监听data里面的每一项
        for (let key in opts.data) {
            this.setData(key, opts.data[key])
        }
    }
    setData(_key, _val) {
        // 数据源里面的数据发生变化 执行watch
        // Object.defineProperty(this) this把上下文指向当前对象 this指向的是当前的类watcher
        // _key代表data对象里面的键值
        Object.defineProperty(this, _key, {
          get:function(){
            return this.$data[_key]
          },
          set:function(newVal){
            //   将修改之前的值保存
            const oldVal = _val
            if (oldVal === newVal) {
              return newVal
            }
            this.$data[_key] = newVal
            this.$watch[_key] && typeof this.$watch[_key] === 'function' &&(
                this.$watch[_key].call(this,newVal,oldVal)
            )
            // return newVal
          }
        })
    }
}
// let vm = new watcher({
//     data: {
//       a: 0,
//       b: 'hello'
//     },
//     watch: {
//       a(newVal, oldVal) {
//         console.log(oldVal,newVal)
//       }  
//     }
// })
// setTimeout(() => {
//   vm.a = 1  
// }, 1000);