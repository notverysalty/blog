import request from '../../util/axios'
import { upload } from '../api'

export default {
  // 上传图片
  addImg (params) {
    return request.upload(upload.img, params)
  },
  // 删除图片
  removeImg (params) {
    return request.delete(upload.removeImg, params)
  },
}