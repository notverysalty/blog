const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/blog', (err) => {
    if (err) {
        console.log('数据库连接失败！错误原因：' + err)
    } else {
        console.log('数据库连接成功')
    }
})

module.exports = mongoose