### 
html(string) 解析 dom 树
css 解析为 cssom
合成 render tree
生成 layout tree
绘制 paint
composite 合成：一个页面有很多分层，最终合成一个平面


### 性能优化
 js relayout paint composite

 改变了 元素的布局：width,height,display   (重排) layout->repaint->composite
 改变了 元素的 color shadow  (重绘) repaint->composite

 重排一定会引起重绘，重绘不一定会引起重排

 composite: transform opacity    前提条件：变化的元素 要处于一个独立的‘层’上面 
当前层元素改变，影响当前处于的‘层’。

如果将不是一个独立‘层’上的，提升为一个独立的‘层’：
1.will-change
2.3d transform:`transilate3D(60px,0,0)`
3.animation transition 激活的时候 动画结束 '层'就会消失
4.video
5.backface-visiblity:hidden 

有什么区别
left, top  relayout->repaint->compisite
transform  变化直接会到达composite合成 