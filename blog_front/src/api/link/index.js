import request from '../../util/axios'
import { link } from '../api'

export default {
  // 获取指定数量外链
  getLink (params) {
    return request.get(link.getLink, params)
  }
}