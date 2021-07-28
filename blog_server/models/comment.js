// 获取数据库连接
const mongoose = require('./db/dal')
// 获取模型对象（Schem）
const Schema = mongoose.Schema
// 设计当前表结构及字段数据类型
// type：字段数据类型
// required：是否必填
// unique：是否为唯一索引

const CommentSchema = new Schema({
  // 评论id
  comment_id: {
    type: String,
    required: true,
    unique: true
  },
  // 评论内容
  content: {
    type: String,
    required: true
  },
  // 是否回复，回复id
  response: {
    type: 'String',
    required: false,
    default: ''
  }
})

const Comment = mongoose.model('comemnt', CommentSchema)

module.exports = Comment