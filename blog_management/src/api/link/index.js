import request from '../../util/axios'
import { link } from '../api'

export default {
  // 添加新类型
  addLink(params) {
    return request.post(link.addLink, params)
  },
  // 删除类型
  removeLink(params) {
    return request.delete(link.removeLink, params)
  },
  // 修改标签
  updateLink(params) {
    return request.put(link.updateLink, params)
  },
  // 获取指定数量类型
  getLink(params) {
    return request.get(link.getLink, params)
  },
}
