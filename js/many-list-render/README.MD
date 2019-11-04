### 渲染
```js
document.body.style.backgroundColor = 'red';
setTimeout(() => {
 document.body.style.backgroundColor = 'blue';
}, 0);

先看到 red 再看到blue  说明在setimeout发生之前会发生一次 样式计算 浏览器并渲染它

异步和同步代码放入两个不同的队列之中， 同步代码执行完，再执行异步队列中的代码

```js
document.body.style.backgroundColor = 'red';
document.body.style.backgroundColor = 'blue';

浏览器进行样式计算 最终渲染blue
