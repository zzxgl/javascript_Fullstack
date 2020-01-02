import v1 from './v1';
export default app => {  //app为形参
    // 路由比较复杂 多个路由文件
  app.use('/v1',v1)
}