import BaseClass from '../../prototype/baseClass'

class Cities extends BaseClass{
  constructor() {
    super();  //子类继承父类
    this.suggestion = this.suggestion.bind(this) //？？？？
  }
  async suggestion(req, res, err) {
    let { keyword } = req.query;  //请求对象里面的查询字符串
    if (!keyword) {
      //   参数校验
      res.send({
        status: -1,
        message: '参数错误'
      })
      return;
    }
    try {
      //   数据库 网络处理
      let data = await this.locationSearch(keyword)
      res.send({
        status: 200,
        message: '获取位置信息成功',
        data
      })
    } catch (e) {
      res.send({
        status: -1,
        message: '获取位置信息失败'
      })
    }
  }
}

export default new Cities();