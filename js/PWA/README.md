## PWA Progress Web App
  1. 支持离线访问  ：Service work
  2. 发送通知 : Notification 
  3. 桌面入口 : manifest.json

## web worker 
  优点： js是单线程的  耗时内容会引起阻塞 利用WebWorks 将耗时内容放置在Worker创建的并行线程中 解决阻塞
  缺点： 每次操作完的结果不能被持久的保存下来 Service Work 基于 WebWork 增加了离线缓存功能
  1. new Worker()
  2. this.postMessage() 往外发送数据
  3. this.onMessage()  接收数据
  PS： 线程之间可以相互通信

## Service Work
  1. 注册 
  2. 添加缓存到cacheStorage  waitUntil()
  3. 激活 
