// 引入jwt
const jwt = require('jsonwebtoken')
// 生成token的秘钥
const jwtTokenSecret = 'yisakomi'
// 生成token方法
function setToken(info, time) {
  
  const token = jwt.sign(info, jwtTokenSecret, { expiresIn: time })
  return token
}

// 逆解析token的方法
function verifyToken(token) {
  return new Promise((resolve, reject) => {
   resolve(jwt.verify(token.split(' ')[1], jwtTokenSecret))
  }).catch(err => {
    console.log('verifyToken err' + err)
  })
}

module.exports = {
  setToken,
  verifyToken
}