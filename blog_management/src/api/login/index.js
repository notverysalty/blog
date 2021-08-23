import request from '../../util/axios'
import { login } from '../api'

export default {
  // 添加新用户
  addUser (params) {
    return request.post(login.addUser, params)
  },
  // 删除用户
  removeBlogger (params) {
    return request.delete(login.removeBlogger, params)
  },
  // 登录
  login (params) {
    return request.post(login.login, params)
  },
  // 获取登录验证码
  verify (params) {
    return request.get(login.verify, params)
  }
}