const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const koaJwt = require('koa-jwt')
const jwt = require('./public/javascripts/jwt')
// 引入session
const session = require('koa-session')

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
      // return '*'
      return 'http://localhost:8080';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'], //设置允许的HTTP请求类型
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

// session
app.keys = ['some secret hurr']
const CONFIG = {
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: true,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
  //  sameSite: 'none'
}
app.use(session(CONFIG, app))

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
  path: [/^\/api\/user/]
}))

router.prefix('/api')
// routes
app.use(router.routes(), router.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
