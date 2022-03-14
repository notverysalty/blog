import request from '../../util/axios'
import { comment } from '../api'

export default {
  // 添加新的博文
  addComment (params) {
    return request.post(comment.addComment, params)
  },
  // 删除博文
  removeComment (params) {
    return request.delete(comment.removeComment, params)
  },
  // 根据文章id获取博文
  getComment (params) {
    return request.get(comment.getComment, params)
  },
}