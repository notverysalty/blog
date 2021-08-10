// 初始化路由对象
const router = require('koa-router')()

// 引入数据表
const { Tag } = require('../models')

// 路由模块
// 添加新标签
router.post('/addTag', async (ctx, next) => {
  const content = ctx.request.body
  try {
    const doc = await Tag.findOne({ name: content.name })
    if (!doc) {
      await new Tag({
        name: content.name
      }).save()
      ctx.status = 200
      ctx.body = {
        code: 200,
        msg: '添加成功'
      }
    } else {
      ctx.status = 200
      ctx.body = {
        code: 0,
        msg: '标签已存在'
      }
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err
    }
  }
})

// 删除标签
router.delete('/removeTag', async (ctx, next) => {
  try {
    await Tag.deleteOne({ name: ctx.query.name })
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '删除成功'
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err
    }
  }
})

// 获取指定数量标签
router.get('/getTag', async (ctx, next) => {
  try {
    const data = await Tag.find(ctx.query.term).sort({ tag_id: -1 }).skip(ctx.query.page).limit(ctx.query.num)
    const total = await Tag.find(ctx.query.term).count()
    ctx.status = 200
    ctx.body = {
      code: 200,
      data,
      total,
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