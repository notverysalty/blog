// 初始化路由
const router = require('koa-router')()

// 引入工具
const { localDate } = require('../public/javascripts/dateFormat')
const { numberSort } = require('../public/javascripts/sort')


// 引入数据表
const { Comment } = require('../models')

// 路由模块
// 查询该博文下的一页评论, term表示条件
router.get('/getComment', async (ctx, next) => {
  try {
    const data = await Comment.find({ article_id: ctx.query.id }).sort({ create_time: -1 }).skip(ctx.query.page).limit(ctx.query.num)
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

const findComemnt = async (ctx) => {
  return await Comment.find({ article_id: ctx.query.id }, 'comemnt').sort({ create_time: 1 })
}

const updateComment = async (id, data) => {
  return await Comment.updateOne({ article_id: id }, { $set: { comment: data } })
}

// 增加该博文下的一条评论
router.post('/addComment', async (ctx, next) => {
  const content = ctx.request.body
  let id = 0
  try {
    const doc = await Comment.find({})
    if (doc.length !== 0) {
      id = doc.sort(numberSort('comment_id'))[0].comment_id + 1
    }
    await new Comment({
      article_id: content.article_id,
      comment_id: id,
      nickname: content.nickname,
      email: content.email,
      content: content.content,
      create_time: localDate(),
      p_id: content.p_id
    }).save()
    // const data = findComemnt(ctx)
    // data.push({ comment_id: data[data.length - 1].comment_id + 1, ...ctx.query.body })
    // updateComment(ctx.query.id, data)
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
// router.post('/updateComment', async (ctx, next) => {
//   try {
//     const data = findComemnt(ctx)
//     data.map((val) => {
//       if (val.comment_id === ctx.query.comment_id) {
//         val.response.push({ response_id: val.response[val.response.length - 1].comment_id + 1, ...ctx.query.body })
//       }
//     })
//     updateComment(ctx.query.id, data)
//     ctx.status = 200
//     ctx.body = {
//       code: 200,
//       msg: '添加成功'
//     }
//   } catch (err) {
//     ctx.status = 500
//     ctx.body = {
//       code: 500,
//       msg: err
//     }
//   }
// })

// 删除该博文下的评论
router.get('/removeComment', async (ctx, next) => {
  try {
    // let list = findComemnt(ctx)
    // const data = list.filter((val) => {
    //   return val.comment_id !== ctx.query.comment_id
    // })
    // updateComment(ctx.query.id, data)
    await Comment.deleteMany({ $or:[{comment_id : ctx.query.id},{p_id : ctx.query.id}]})
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