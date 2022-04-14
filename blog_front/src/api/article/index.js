import request from '../../util/axios'
import { article } from '../api'

export default {
  // 添加新的博文
  addArticle (params) {
    return request.post(article.addArticle, params)
  },
  // 删除博文
  removeArticle (params) {
    return request.delete(article.removeArticle, params)
  },
  // 修改博客
  updateArticle (params) {
    return request.put(article.updateArticle, params)
  },
  // 根据文章id获取博文
  getArticle (params) {
    return request.get(article.getArticle, params)
  },
  // 查询指定数量的博文列表
  getAssignedArticle (params) {
    return request.get(article.getAssignedArticle, params)
  },
  // 增加评论
  addComment (params) {
    return request.post(article.addArticle, params)
  },
  // 删除评论
  removeComment (params) {
    return request.delete(article.removeComment, params)
  }
}