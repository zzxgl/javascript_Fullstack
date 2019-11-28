 ### 应用层 
 http  webSocket
- http: client ->>>> server
- webSocket: client -> server
             server -> client
  全双工双向通信

http2.0 :支持server-push


## 连接过程
1. 发送一个http 请求 告知双方由http协议升级为WebSocket协议
   后端 101 switch protocols 交换协议
   Connection: Upgrade  之后 由http协议升级为 webSocket 
   所有后续的发送 接受信息都会走这个全双工双向通道