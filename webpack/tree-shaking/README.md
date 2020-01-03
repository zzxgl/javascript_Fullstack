## webpack 
  - webpack 1.0

  - webpack 2.0 拆分文件体积 配置很多
    rollup:(tree-shaking) 各种工具库 比如：vue

  - webpack 3.0
    parcel:( 0 配置)

  - webpack 4.0  0 配置
    国内(fis)
## tree-shaking  剔除无用代码  有限制条件
   - 导入工具库时 tree-shaking失效
   - 条件：
       1. 必须使用 es6module(import&&export) 小心一些第三方的模块导出可能用的是 commonjs
    - 解决
       1. 手动导入具体的模块 import includes from'lodash/includes'
       2. babel-plugin-import 
## mode webpack根据两个模式， 内置了一些默认配置 
  - develpoment 开发环境
  - production 生产环境 自动开启tree-shaking功能
  - mode配置 package.json里面配置 --mode production

### es6 module && commonjs
  - es6 module：在js编译的时候，就知道 引入了哪些模块  静态引入
      PS:import 不能够出现在任何逻辑判断里面
         es(6+) import 支持动态引入
  - commonJS : 只有在 js执行的时候才知道 引入了哪些模块 动态引入
