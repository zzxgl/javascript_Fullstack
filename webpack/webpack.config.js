const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/, //匹配文件
      //   use: ['style-loader', 'css-loader'] //指明使用什么加载器
      // },
      // {
      //   test: /\.scss$/, //匹配文件
      //   use: ['style-loader', 'css-loader','sass-loader'] //指明使用什么加载器
      // },
      {
        test:/\.(sc|c|sa)ss$/,
        use:[
          // 'style-loader', //让css能够引入到html中去
          MiniCssExtractPlugin.loader,   //使用插件 
          {
            loader:'css-loader',
            options: {sourceMap: true}
          },
          // 浏览器兼容
          {
            loader:'postcss-loader',
            options:{
              ident:'postcss', //指名要使用哪一种库
              sourceMap:true,
              plugins: loader => [
                require('autoprefixer')()
                // 这里还可以引入更多别的插件
              ]
            }
          },
          {
            loader:'sass-loader',
            options: {sourceMap: true}  //显示样式的来源文件
          }
        ]
      }
    ]
  },
  // 拓展一个出口
  plugins:[
    new MiniCssExtractPlugin({
      filename:'[name].css', //最终输出的文件名
      chunkFilename:'[id].css'
    })
  ]
}
