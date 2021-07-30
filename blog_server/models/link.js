// 获取数据库连接
const mongoose = require('./db/dal')
// 获取模型对象（Schem）
const Schema = mongoose.Schema
// 设计当前表结构及字段数据类型
// type：字段数据类型
// required：是否必填
// unique：是否为唯一索引

const LinkSchema = new Schema({
  // 网站id
  link_id: {
    type: String,
    required: true,
    unique: true
  },
  // 网站链接
  link: {
    type: String,
    required: true
  },
  // 网站图标
  icon: String,
  // 网站名称
  name: {
    type: String,
    required: true
  },
  // 网站标签
  tags: Array,
  // 网站简介
  suggest: String,
  // 作者
  author: String,
  // 创建日期
  create_time: Date,
  // 修改日期
  revise_time: Date,
  // 状态
  status: {
    type: Number,
    // 0可用， 1不可用
    enum: [0, 1],
    default: 1
  }
})

const Link = mongoose.model('link', LinkSchema)

module.exports = Link