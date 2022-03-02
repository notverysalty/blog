// 获取数据库连接
const mongoose = require('./db/dal')
// 获取模型对象（Schem）
const Schema = mongoose.Schema
// 设计当前表结构及字段数据类型
// type：字段数据类型
// required：是否必填
// unique：是否为唯一索引

const IdsSchema = new Schema({
  tableName: {
    type: String,
    required: true,
    unique: true
  },
  val: {
    type: Number,
    required: true
  }
})

const Ids = mongoose.model('ids', IdsSchema)

module.exports = Ids