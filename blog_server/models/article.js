// 获取数据库连接
const mongoose = require('./db/dal')
// 获取模型对象（Schem）
const Schema = mongoose.Schema
// 设计当前表结构及字段数据类型
// type：字段数据类型
// required：是否必填
// unique：是否为唯一索引

const ArticleSchema = new Schema({
  article_id: {
    type: Number,
    required: true,
    unique: true
  },
  // 文章标题
  title: {
    type: String,
    required: true
  }, 
  // 文章内容
  body: {
    type: String,
    required: true
  },
  // 文章标签
  tags: {
    type: Array
  },
  // 作者
  author: {
    type: String,
    required: true,
    default: 'yisakomi'
  },
  // 新增时间
  create_time: {
    type: String
  },
  // 修改时间
  revise_time: {
    type: String
  },
  // 观看数量
  watch_num: {
    type: Number,
    default: 0
  },
  // 文章类型
  type: {
    type: Array
  },
  // 评论
  comment: {
    type: Array
  }
})

const Article = mongoose.model('article', ArticleSchema)

module.exports = Article