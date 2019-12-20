###  手动初始化项目结构
  # npm i webpack webpack-cli --save-dev
  # npm i lodash save-dev
  - dist 存放打包之后的文件
  - src 存放入口文件
  - webpack.config.js  webpack的配置文件
  # npm init -y  初始化package.json文件
  # npx webpack  
  # npm i  style-loader css-loader --save-dev  打包css（非javascript文件）需要安装第三方插件 loader
    - css-loader 处理css文件 让css文件打包完能在js文件中引入
    - style-loader 处理css文件 让css文件打包完能在html文件中引入
  ## webpack中的（module）用来决定如何处理项目中的不同类型模块
     webpack支持语法：
       es6 import 语法
       Comminjs require() 语法
       AMD define 和 require语句
       css/sass/less 文件中的@import语句
       样式 (url(...) 或者html文件(<img src="...">))中的图片链接

  ## npm i sass-loader node-sass --save-dev 
  ## npm i postcss-loader autoprefixer --save-dev 给css添加前缀 autoprefixer进行浏览器的部分兼容补全

  ## 抽取样式 将css单独打包 npm i mini-css-extract-plugin --save-dev
  