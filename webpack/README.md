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
 
  ### 压缩打包   去空格
    - 压缩css (optimize-css-assets-webpack-plugin)
    - 压缩js (uglifyjs-webpack-plugin)
  ### 为css js文件添加hash值，防止缓存 .[hash]
    每次文件内容修改 生成不一样的文件 解决修改内容依旧读取缓存未修改版本文件的问题

  ### html-webpack-plugin  打包html文件

  ### 清理目录 
    - clean-webpack-plugin 在打包之前把dist目录清空

  ### webpack图片处理和优化
    - file-loader
    - image-webpack-loader