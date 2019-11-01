### 什么是事件模型
 - 三个阶段 ：捕获阶段 目标阶段 冒泡阶段
  -捕获 
  -目标
  -冒泡

 - addEventListener
    第三个参数 默认为 false 冒泡阶段 true为捕获阶段
 - 阻止冒泡
    event.stopPropagation();
 - evnet 对象
    event.preventDefault(); 阻止默认时间的发生
 - 事件委托（事件代理）事件触发的节点与事件绑定的节点不是同一个
    event.target 谁触发指向谁
    event.currentTarget 谁绑定指向谁
### 请用 DOM2 级别事件
    DOM0 onClick 不能设置冒泡捕获  只能绑定一个事件
    DOM2 addEventListener 
    DOM3 addEventListener 增加了很多 键盘 鼠标 事件