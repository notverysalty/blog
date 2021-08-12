const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const koaJwt = require('koa-jwt')
const jwt = require('./public/javascripts/jwt')

// 添加路由
const router = require('./routes/index')
const cors = require('koa-cors')

// error handler
onerror(app)

// middlewares
app.use(
  bodyparser({
    enableTypes: ['json', 'form', 'text'],
  })
)
app.use(
  cors({
    origin: function (ctx) {
      /*if (ctx.url === '/cors') {
          return "*"; // 允许来自所有域名请求
      }*/
      return '*'
      // return 'http://localhost:8080';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT'], //设置允许的HTTP请求类型
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
  })
)
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(
  views(__dirname + '/views', {
    extension: 'pug',
  })
)

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(async (ctx, next) => {
  return next().catch(err => {
    if (401 === err.status) {
      ctx.status = 401
      ctx.body = {
        code: 401,
        msg: '登录过期，请重新登录'
      }
    }
  })
})

// 对路由进行token验证
app.use(koaJwt({ secret: 'yisakomi'}).unless({
  // login接口不需要验证
  path: [/^\/user\/login/]
}))

// routes
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
