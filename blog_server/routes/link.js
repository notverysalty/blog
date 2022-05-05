// 初始化路由对象
const router = require('koa-router')()
const { localDate } = require('../public/javascripts/dateFormat')

// 引入数据表
const {
  Link
} = require('../models')

// 路由模块
// 添加新外链
router.post('/addLink', async (ctx, next) => {
  const content = ctx.request.body
  console.log(content)
  let id = 1
  try {
    const doc = await Link.find({})
    if (doc.length !== 0) {
      id = doc.sort(numberSort('link_id'))[0].link_id + 1
    }
    await new Link({
      link_id: id,
      link: content.link,
      name: content.name,
      suggest: content.suggest,
      create_time: localDate(),
      author: content.author
    }).save()
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '添加成功'
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err
    }
  }
})

// 删除外链
router.delete('/removeLink', async (ctx, next) => {
  try {
    await Link.deleteOne({
      link_id: ctx.query.id
    })
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

// 修改外链
router.put('/updateLink', async (ctx, next) => {
  const content = ctx.request.body
  try {
    await Link.updateOne({
      link_id: content.id
    }, content)
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '修改成功',
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err,
    }
  }
})

// 获取指定数量外链
router.get('/getLink', async (ctx, next) => {
  try {
    const data = await Link.find(ctx.query).sort({
      id: -1
    }).skip(ctx.query.page).limit(ctx.query.num)
    const total = await Link.find(ctx.query).count()
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