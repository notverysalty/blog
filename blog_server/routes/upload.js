// 初始化路由对象
const fs = require('fs')
const path = require('path')
const router = require('koa-router')()

// 压缩图片工具
let images = require('images')
// 上传图片的模板
let multer = require('koa-multer')
// 生成的图片放入uploads文件夹下
let upload = multer({ dest: 'uploads/' })

const readFile = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}
const writeFile = (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) {
        reject(err)
      }
      resolve(console.log('写入完成'))
    })
  })
}

// 上传图片
router.post('/img', upload.single('img'), async (ctx, next) => {
  const content = ctx.req.file
  try {
    // 读取成功
    const data = await readFile(content.path)
    // 声明图片名字为时间戳和随机数拼接成的，尽量确保唯一
    let time = Date.now() + parseInt(Math.random() * 999) + parseInt(Math.random() * 5555)
    // 拓展名
    let extname = content.mimetype.split('/')[1]
    // 拼接成图片名
    let keepname = time + '.' + extname
    await writeFile(path.join(__dirname, '../public/images/' + keepname), data)
    fs.unlink(content.path, (err) => {
      if (err) {
        ctx.status = 200
        ctx.body = {
          code: 0,
          msg: err
        }
      }
    })
    fs.stat(path.join(__dirname, '../public/images/' + keepname), (err, file) => {
      if (err) {
        ctx.status = 200
        ctx.body = {
          code: 0,
          msg: err
        }
      }
      let name = path.join(__dirname, '../public/images/' + keepname)
      let outName = path.join(__dirname, '../public/images/thumbnail' + keepname)
      images(name).size(600).save(outName, { quality: 50 })
    })
    ctx.status = 200
    ctx.body = {
      code: 200,
      url: keepname,
      msg: '图片上传成功'
    }
  } catch (err) {
    ctx.status = 500
    ctx.body = {
      code: 0,
      msg: err
    }
  }
})

// 删除图片
router.delete('/removeImg', async (ctx, next) => {
  fs.unlink(path.join(__dirname, '../public/images/' + ctx.query.url), err => {
    if (err) {
      ctx.status = 200
      ctx.body = {
        code: 0,
        msg: '图片删除失败'
      }
      return
    }
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '图片删除成功'
    }
  })
})

// 导出模块
module.exports = router