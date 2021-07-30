// 初始化路由对象
const router = require('koa-router')()

// 引入工具
const { numberSort } = require('../public/javascripts/sort')
const { updepict } = require('../public/javascripts/depictRelevance')
const { localDate } = require('../public/javascripts/dateFormat')

// 引入数据表
const { Article, Tag, Type } = require('../models')

// 路由
// 添加新的博文
router.post('/addArticle', async (ctx, next) => {
  let id = 0
  // article_id 文章id
  // title 文章标题
  // body 文章内容
  // tags 文章标签
  // author 文章作者
  // article_type 文章类型
  try {
    let doc = await Article.find({})
    if (doc.length != 0) {
      id = doc.sort(numberSort('article_id'))[0].article_id + 1
    }
    await new Article({
      article_id: id,
      title: ctx.query.title,
      body: ctx.query.body,
      tags: ctx.query.tags,
      author: ctx.query.author,
      type: ctx.query.type,
      create_time: localDate()
    }).save()
    await updepict(Tag, id, true, ctx.query.tags, 1)
    await updepict(Type, id, true, ctx.query.type, 1)
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '保存成功。'
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err
    }
  }
  // Article.find({}).then(doc => {

  // })
})

// 删除博文
router.get('/removeArticle', async (ctx, next) => {
  // 文章id
  let id = ctx.query.id
  try {
    const doc = await Article.findOne({ article_id: id })
    await updepict(Tag, id, false, doc.tags, -1)
    await updepict(Type, id, false, doc.type, -1)
    await Article.deleteOne({ article_id: id })
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '删除成功。'
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err
    }
  }
})

// 修改博客
router.post('/updateArticle', async (ctx, next) => {
  try {
    await Article.updateOne({ article_id: ctx.query.body.id }, ctx.query.body)
    let id = ctx.query.body.id
    await updepict(Tag, id, false, ctx.query.oldtags, -1)
    await updepict(Type, id, false, ctx.query.oldtype, -1)
    await updepict(Tag, id, true, ctx.query.body.tags, 1)
    await updepict(Type, id, true, ctx.query.body.type, 1)
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '修改成功'
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err
    }
  }
})

// 根据文章id获取博文
router.get('/getArticle', async (ctx, next) => {
  try {
    const data = await Article.findOne({ article_id: ctx.query.id})
    await Article.updateOne({ article_id: ctx.query.id }, { $set: { watch_num: data.watch_num + 1}})
    ctx.status = 200
    ctx.body = {
      code: 200,
      data,
      msg: '查询成功'
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: '查询失败'
    }
  }
})

// 查询指定数量的博文列表
router.get('/getAssignedArticle', async (ctx, next) => {
  // term 条件
  // page 页面
  // num 需要的数量
  try {
    const data = Article.find(ctx.query.term, 'article_id title').sort({ article_id: -1 }).skip(ctx.query.page).limit(ctx.query.num)
    ctx.status = 200
    ctx.body = {
      code: 200,
      data,
      msg: '查询成功'
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err
    }
  }
})

module.exports = router