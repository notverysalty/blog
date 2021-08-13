// 获取数据库连接
const mongoose = require('./db/dal')
// 获取模型对象（Schem）
const Schema = mongoose.Schema
// 设计当前表结构及字段数据类型
// type：字段数据类型
// required：是否必填
// unique：是否为唯一索引
const TypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  // 类型数量
  num: {
    type: Number,
    default: 0
  },
  // 关联文章ID数组
  list: Array,
  // 状态
  status: {
    type: Boolean,
    // 0禁用，1启用
    default: true
  }
})
const Type = mongoose.model('type', TypeSchema)

module.exports = Type