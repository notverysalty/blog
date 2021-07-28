// 获取数据库连接
const mongoose = require('./db/dal')
// 获取模型对象（Schem）
const Schema = mongoose.Schema
// 设计当前表结构及字段数据类型
// type：字段数据类型
// required：是否必填
// unique：是否为唯一索引
const BloggerScema = new Schema({
    blogger_id: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    create_time: {
        type: Date
    },
    last_modified_time: {
        type: Date
    },
    avatar: {
        type: String,
        default: 'public/img/default.jpeg'
    },
    // 个性签名
    bio: {
        type: String,
        default: ''
    },
    // 性别：0女，1男，-1秘密
    gender: {
        type: Number,
        enum: [0, 1, -1],
        default: -1
    },
    birthday: {
        type: Date
    },
    status: {
        type: Number,
        // 0冻结，1普通用户，2管理
        enum: [0, 1, 2]
    },
    telephone: {
        type: Number,
        unique: true
    }
})

const Blogger = mongoose.model('blogger', BloggerScema)

module.exports = Blogger