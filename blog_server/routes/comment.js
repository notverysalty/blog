// 初始化路由
const router = require('koa-router')()

// 引入工具


// 引入数据表
const { Article } = require('../models')

// 路由模块
// 查询该博文下的一页评论, term表示条件
router.get('/getComment', async (ctx, next) => {
  try {
    const data = await Article.find({ article_id: ctx.query.id }, 'comemnt').sort({ create_time: 1 }).skip(ctx.query.page).limit(ctx.query.num)
    ctx.status = 200
    ctx.body = {
      code = 200,
      data,
      msg: '查询成功'
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code = 500,
      msg: err
    }
  }
})

async const findComemnt = (ctx) => {
  return await Article.find({ article_id: ctx.query.id }, 'comemnt').sort({ create_time: 1 })
}

async const updateComment = (id, data) => {
  return await Article.updateOne({ article_id: id }, { $set: { comment: data } })
}

// 增加该博文下的一条评论
router.post('/addComment', async (ctx, next) => {
  try {
    const data = findComemnt(ctx)
    data.push({ comment_id: data[data.length - 1].comment_id + 1, ...ctx.query.body })
    updateComment(ctx.query.id, data)
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

// 增加回复
router.post('/updateComment', async (ctx, next) => {
  try {
    const data = findComemnt(ctx)
    data.map((val) => {
      if (val.comment_id === ctx.query.comment_id) {
        val.response.push({ response_id: val.response[val.response.length - 1].comment_id + 1, ...ctx.query.body })
      }
    })
    updateComment(ctx.query.id, data)
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

// 删除该博文下的评论
router.get('/removeComment', async (ctx, next) => {
  try {
    let list = findComemnt(ctx)
    const data = list.filter((val) => {
      return val.comment_id !== ctx.query.comment_id
    })
    updateComment(ctx.query.id, data)
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

module.exports = router