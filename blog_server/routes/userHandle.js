// 初始化路由对象
const router = require('koa-router')()
// 创建验证码对象
const svgCaptcha = require('svg-captcha')

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
    await new Blogger(
      Object.assign({}, content, {
        blogger_id: id,
        'create_ time': localDate(),
      })
    ).save()
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '添加成功',
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err,
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
      msg: '删除成功',
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err,
    }
  }
})

// 获取登录验证码
router.get('/verify', async (ctx, next) => {
  const cap = svgCaptcha.create({
    size: 4, // 验证码长度
    width: 100,
    height: 30,
    fontSize: 40,
    ignoreChars: '0oO1ilI', // 验证码字符中排除 0o1i
    noise: 2, // 干扰线条的数量
    color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
    background: '#eee', // 验证码图片背景颜色
  })
  const img = cap.data // 验证码
  const text = cap.text.toLowerCase() //忽略大小写
  ctx.session.verify = text // 保存到session
  ctx.response.type = 'image/svg+xml'
  ctx.status = 200
  ctx.body = {
    code: 200,
    data: img,
  }
})

// 登录，并设置cookie
router.post('/login', async (ctx, next) => {
  const content = ctx.request.body
  const verifyBase = ctx.session.verify
  try {
    let nickname = content.nickname
    let password = content.password
    const verify = content.verify.toLowerCase()
    console.log(verify, ctx.session)
    ctx.status = 200
    if (verify !== verifyBase) {
      ctx.body = {
        code: 0,
        msg: '验证码错误',
      }
      return
    }
    // 验证账号密码格式
    if (!nickname || !password) {
      ctx.body = {
        code: 0,
        msg: '账号或密码错误',
      }
    }
    // 查找用户
    const num = await Blogger.countDocuments({ nickname, password })
    if (num > 0) {
      ctx.body = {
        code: 200,
        data: jwt.setToken({ nickname }, 86400),
        msg: '登陆成功',
      }
    } else {
      ctx.body = {
        code: 1,
        msg: '账号或密码错误！',
      }
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 500,
      msg: err,
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
        msg: '登录过期',
      }
    } else {
      ctx.status = 200
      ctx.body = {
        code: 200,
        data: doc,
        msg: '解析成功',
      }
    }
  })
})

// 导出路由
module.exports = router
