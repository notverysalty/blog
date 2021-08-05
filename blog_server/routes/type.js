// 初始化路由对象
const router = require('koa-router')()

// 引入数据表
const { Type, Tag } = require('../models')

// 路由模块
// 增加新类型
router.get('/addType', async (ctx, next) => {
  try {
    const doc = await Type.findOne({ name: ctx.query.name })
    if (!doc) {
      await new Type({
        name: ctx.query.name
      }).save()
      ctx.status = 200
      ctx.body = {
        code: 200,
        msg: '添加成功'
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

// 删除类型
router.get('/removeType', async (ctx, next) => {
  try {
    await Type.deleteOne( {name: ctx.query.name })
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

// 获取所有类型
router.get('/getType', async (ctx, next) => {
  try {
    const data = await Type.find(ctx.query.term).sort({ type_id: -1 }).skip(ctx.query.page).limit(ctx.query.num)
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