// 引入jwt
const jwt = require('jsonwebtoken')
// 生成token的秘钥
const jwtTokenSecret = 'yisakomi'
// 生成token方法
function createToken(info, time) {
  const token = jwt.sign(info, jwtTokenSecret, { expiresIn: time })
  return token
}

// 逆解析token的方法
function analyzingToken(token, cb) {
  jwt.verify(token, jwtTokenSecret, cb)
}

module.exports = {
  createToken,
  analyzingToken
}