## 顺序
touchStart
touchMove
touchEnd
// 300ms
click
- 移动端 解决300ms延迟 
   1. <meta name="viewport" content="width=device-width, initial-scale=1.0">
   2.  e.preventDefault();
    // 阻止冒泡事件
    // 手动触发 直接执行click
    document.getElementById('clickMe').click();
   3. 自定义鼠标事件 阻止默认 click提前