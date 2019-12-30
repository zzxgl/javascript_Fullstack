let url = require('url')
let request = {
  get url () {  //方法名前加上get关键字 后面调用方法时 url ctx.request.url 直接进行取值
    return this.req.url    
  },
  get path () {
    return url.parse(this.req.url).pathname
  },
  get query () {
    return url.parse(this.req.url).query
  }
}

module.exports = request