## 模块化
  1. node原生支持的commonjs
  2. es6模块化方案  import关键字 
## node 后端，如何让es6模块化来到node开发中
  - index.js(@babel/register) +　app.js(模块化输出)  PS:@babel/register 将js代码挂载到babel中
  - .babelrc
      1. preset 预处理 env
      2. plugin 插件 转译 语法
## babel

## 分层
  router对象 -> controller (参数校验等处理) /controller目录 
  /v1/cities.js