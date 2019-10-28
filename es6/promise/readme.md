### 异步   
   - js是单线程语言 
   - 同步执行，代码从上往下执行
   - 回调函数，解决异步    =>大面积的回调的，回调地狱 浏览器性能消耗大
   - promise，解决异步   promise包裹的对象必须resolve东西出来，然后才能成功使用.then
   - .then(()=>{
        .then((res) => {
                console.log(res)
            })
            //.then接收resolve参数
        .catch((err)=>{
                console.log(err)
            })
            //.catch接收reject参数
   })
   -  Promise.all([test(),xq()]).then((value)=>{
            console.log(value,'--------------')
            marry()
        })
        test()和xq()都执行完了时，才能执行marry()
        value打印出的是 一个数组 test()和xq()传出来的resolve值

   -  Promise.race([test(),xq()]).then((value)=>{
            console.log(value,'--------------')
            marry()
        })
        test()和xq()二者其一执行完，marry()就能执行
        value 打印的是先执行完那个函数Promise里面的resolve值
        