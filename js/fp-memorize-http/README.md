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
  2. 状态码 200 from memory/disk cache
  3. expires: 绝对时间  2019122711:00:00  cache-control 相对时间 相对于上一次请求的时间和再次发出请求的时间  30*60
  ## 协商缓存 Etag if-none-match  
  1. Etag:一个能够标识文件内容唯一的东西 比如用哈希(hash)算法：MD5，sha-128,sha-256
     哈希算法：同样的内容 hash完 之后结果一定是一样的 
     不管hash任何东西 结果都是一个固定长度的字符串
     md5('abc1234567') = xyz
     md5('abc1234567') = xyz
     md5(文件内容) = abc
     第一次请求时， md5(文件内容) = 'hash1'
     第二次请求时， md5(文件内容) = 'hash2'
     last-modified 
     第一次请求 服务器响应一个last-modified字段给浏览器 返回一个文件的最后修改时间
     第二次请求 浏览器携带 if-modified-match 给服务端  再去获取下一个文件的最后修改时间
  2. 过期： Etag存在 -> 携带 if-none-match :abc向服务器发起请求 -> 服务器决策 200(服务器进行响应) ? 304 (从缓存里面读取)
  3. Etag不存在 -> 携带 if-modefied-since:last-modified -> 200 ? 304
  ps: Etag if-none-match 的优先级高于if-modified-since  last-modified