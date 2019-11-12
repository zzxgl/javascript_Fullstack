## 跨域
- 浏览器的安全策略：两个服务器需要通信，要遵守同源策略
- 什么是同源策略？
    - 同源 => 同协议 同域名 同端口号 都相同

    - 同源才会让你发出请求 不同源就产生跨域
      http://localhost.com/api/vi

      http://localhost:8080/index.html

### 解决跨域
- cros 跨域资源共享
  'Access-Control-Allow-Origin': '*'
  cross-origin-resource-share 一个规范，允许服务器申明哪些源可以访问

### 请求的步骤
1. 简单请求：
  - 直接发起跨域请求
  - 表单(form)可以构造的请求就是简单请求
2. 非简单请求： 先发起一个预检(preFlight)请求,预先试探一下服务端支持不支持跨域
               之后才会发起正式的跨域请求

## jsonP
    link script img a : 不受同源策略的影响