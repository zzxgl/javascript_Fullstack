### 拖拽事件


### 浏览器
    1. 浏览器收到 html 解析为DOM(Document Object Model)
        遇到 css 解析为 cssom
    2. 把DOM和cssom 合在一起 生成一棵渲染树
        根据 样式 计算位置 开始渲染布局

domContentloaded 就是当 HTML 解析完发生的

有一些标签 img link script 会引入外部资源，会在解析完HTML之后开始请求资源
