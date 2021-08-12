// 初始化路由对象
const router = require('koa-router')()

// 引入工具
const { numberSort } = require('../public/javascripts/sort')
const { localDate } = require('../public/javascripts/dateFormat')
const jwt = require('../public/javascripts/jwt')

// 引入数据表
const { Blogger } = require('../models')

// 路由模块
// 添加新用户
router.post('/addUser', async (ctx, next) => {
  const content = ctx.request.body
  try {
    let id = 0
    const doc = await Blogger.find({})
    if (doc.length !== 0) {
      id = doc.sort(numberSort('blogger_id'))[0].blogger_id + 1
    }
    await new Blogger(Object.assign({}, content, { 'blogger_id': id, 'create_ time': localDate() })).save()
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

// 删除用户
router.delete('/removeBlogger', async (ctx, next) => {
  try {
    await Blogger.deleteOne({ blogger_id: ctx.query.id })
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

// 登录，并设置cookie
router.post('/login', async (ctx, next) => {
  const content = ctx.request.body
  try {
    let nickname = content.nickname
    let password = content.password
    // 验证账号密码格式
    if (!nickname || !password) {
      ctx.status = 200
      ctx.body = {
        code: 0,
        msg: '账号或密码错误'
      }
    }
    // 查找用户
    const num = await Blogger.countDocuments({ nickname, password })
    if (num > 0) {
      ctx.status = 200
      ctx.body = {
        code: 200,
        data: jwt.setToken({ nickname }, 3600),
        msg: '登陆成功'
      }
    } else {
      ctx.status = 200
      ctx.body = {
        code: 1,
        msg: '账号或密码错误！'
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

// 解析token
router.get('/analyzingToken', async (ctx, next) => {
  let token = ctx.query.token
  jwt.verifyToken(token, (err, doc) => {
    if (err) {
      ctx.status = 200
      ctx.body = {
        code: 0,
        msg: '登录过期'
      }
    } else {
      ctx.status = 200
      ctx.body = {
        code: 200,
        data: doc,
        msg: '解析成功'
      }
    }
  })
})

// 导出路由
module.exports = router