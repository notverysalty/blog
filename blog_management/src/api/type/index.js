import request from '../../util/axios'
import { type } from '../api'

export default {
  // 添加新类型
  addType (params) {
    return request.post(type.addType, params)
  },
  // 删除类型
  removeType (params) {
    return request.delete(type.removeType, params)
  },
  // 获取指定数量类型
  getType (params) {
    return request.get(type.getType, params)
  }
}