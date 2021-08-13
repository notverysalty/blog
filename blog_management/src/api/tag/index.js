import request from '../../util/axios'
import { tag } from '../api'

export default {
  // 添加新标签
  addTag (params) {
    return request.post(tag.addTag, params)
  },
  // 删除标签
  removeTag (params) {
    return request.delete(tag.removeTag, params)
  },
  // 修改标签
  updateTag (params) {
    return request.put(tag.updateTag, params)
  },
  // 获取指定数量标签
  getTag (params) {
    return request.get(tag.getTag, params)
  }
}