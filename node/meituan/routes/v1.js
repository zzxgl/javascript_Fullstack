// 向外输出一个路由对象
import express from 'express';
import Cities from '../controller/v1/cities'
const router = express.Router(); //生成一个router对象
// mvc controller 控制器 
router.get('/suggestion', Cities.suggestion)

export default router