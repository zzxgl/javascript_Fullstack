### 访问记录
url
MPA(多页应用)：刷新整个页面， 发送(html)请求给后端，然后后端记录下来 
SPA(单页应用)：
hashRouter && historyRouter
  1. /detail
    ``` js
      mounted() {
        访问记录++;
      }
    ```
  2.无痕埋点，不侵入业务代码
   只要引入 监控的js就可以自动监控
    
    怎样监控页面的改变？？

### http 请求 
  ajax
  /src/request.js
   1. axios
   2. 
### js错误 

### 资源错误