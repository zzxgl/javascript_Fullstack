### 纯函数
 1. 相同的输入会有相同的输出（结果只依赖于函数的输入 ）
 2. 不会产生副作用
 
 不属于纯函数：
 1. I/O操作
 2. Math.random
 3. appendChild 等 对DOM的操作

 纯函数的优点和好处：
 1. 易于测试
 2. 易于缓存  缓存纯函数的计算结果


### 高阶函数 抽象过程 实现纯函数的缓存
  
### HTTP 缓存
  1. 状态码 200服务器响应正常 304服务器不返回任何内容 浏览器从缓存里面取到内容

### 缓存的流程
  第一次请求：浏览器向服务器请求资源， 然后服务器响应内容的时候，会设置当前的资源缓存的
  1. expires(1.0) /cache-control(1.1)
  2. Etag  last-modifed 文件的最后修改时间
  第二次请求：  
  ## 强缓存 
  1. 浏览器判断缓存有没有过期（依据 cache-control），如果没有直接从缓存里面取内容，不经过服务器
  ## 协商缓存 Etag if-none-match 
  2. 过期： Etag存在 -> 携带 if-none-match :abc 服务器决策 200 ？ 304 
  3. Etag不存在 -> 携带 if-modefied-since:last-modified 200 ? 304
  ps: Etag id-none-match 的优先级高于if-modified-since  last-modified 