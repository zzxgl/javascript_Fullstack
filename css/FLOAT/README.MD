#### float 
    - 脱离文档流 父容器高度塌陷 会影响后面元素的布局
    - clear 清除浮动 left right both
        - 父容器添加一个伪类，弥补塌陷   clear:left; display: table;
            after 出现在闭合标签前
            before 出现在开始标签后
        - 浮动的容器后面添加一个DOM结构做清除
        - BFC 块级格式化上下文（block formating context）  父级容器设置 overfloat:hidden auto float属性 display table-  position:absolute(会脱离文档流) position:fixed(也会脱离文档流)