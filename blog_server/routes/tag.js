// 初始化路由对象
const router = require('koa-router')()

// 引入数据表
const { Tag } = require('../models')

// 路由模块
// 添加新标签
router.get('/addTag', async (ctx, next) => {
  try {
    const doc = await Tag.findOne({ name: ctx.query.name })
    if (!doc) {
      await new Tag({
        name: ctx.query.name
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
router.get('/removeTag', async (ctx, next) => {
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

module.exports = router