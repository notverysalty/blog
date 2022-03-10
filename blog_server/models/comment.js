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
  // 评论父id
  p_id: {
    type: String,
    default: '-1',
  },
  // 文章id
  article_id: {
    type: String,
    require: true,
  },
  // 昵称
  nickname: {
    type: String,
    require: true
  },
  // 邮箱
  email: {
    type: String,
    require: true
  },
  // 评论内容
  content: {
    type: String,
    required: true
  },
  create_time: {
    type: Date,
    required: true
  }
})

const Comment = mongoose.model('comemnt', CommentSchema)

module.exports = Comment