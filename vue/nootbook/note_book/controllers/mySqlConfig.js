var mysql = require('mysql')
var config = require('./defaultConfig')

// 创建线程池 
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port:config.database.PORT
})

// 创建一个统一连接数据的方法
let  allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
        // getConnection 连接数据库
      pool.getConnection(function (err, connection) {
        if(err) {
          reject(err)
        } else {
            // 连接成功 查询语句 返回查询结果
          connection.query(sql, values, (err, rows) => {
            if(err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()
          })
        }
      })
    })
  }
}

// 读取所有user表数据 测试数据连接
let getAllusers = function () {
  let _sql = `select * from users;`
  return allServices.query(_sql)
}
module.exports = {
    getAllusers
}