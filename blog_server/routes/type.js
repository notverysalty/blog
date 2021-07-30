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
router.get('getDepicAll', async (ctx, next) => {
  try {
    const typeDoc = await Type.find({})
    const tagDoc = await Tag.find({})
    ctx.status = 200
    ctx.body = {
      code: 200,
      data: {
        typeDoc,
        tagDoc
      },
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