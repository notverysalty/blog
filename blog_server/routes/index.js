const router = require('koa-router')()
const blog = require('./blog')
const comment = require('./comment')
const type = require('./type')
const tag = require('./tag')
const upload = require('./upload')
const userHandle = require('./userHandle')
const link = require('./link')

router
  .use('/blog', blog.routes())
  .use('/comment', comment.routes())
  .use('/type', type.routes())
  .use('/tag', tag.routes())
  .use('/upload', upload.routes())
  .use('/user', userHandle.routes())
  .use('/link', link.routes())

module.exports = router