import axios from 'axios'
import router from '../router'
import util from '../util/util'

// 错误信息
const showStatus = (status) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'http://www.yisakomi.cn/api' : 'http://localhost:3000/api',
  headers: {
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true,
  timeout: 30000,
  validateStatus () {
    return true
  }
})

// 请求拦截器
// service.interceptors.request.use(config => {
//   config.headers['Authorization'] = "Bearer " + util.getLocal('token')
//   return config
// }, err => {
//   err.data.msg = '服务器异常，请联系管理员！'
//   return Promise.resolve(err)
// })

// 响应拦截器
// service.interceptors.response.use(response => {
//   const status = response.status
//   let msg = ''
//   if (status < 200 || status > 300) {
//     msg = showStatus(status)
//     if (status === 401) {
//       util.localClear()
//       router.replace({
//         name: 'login',
//         query: {
//           redirect: router.currentRoute.fullPath
//         }
//       })
//     }
//     response.data.msg = msg
//   }
//   return response
// }, err => {
//   err.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
// })

//简易封装请求
class Request {
  // get请求
  get(url, params) {
    const config = {
      method: 'get',
      params,
      url
    }
    return service(url, config)
  }
  // post请求
  post(url, params) {
    const config = {
      method: 'post',
      data: params,
      url
    }
    return service(url, config)
  }
  // delete
  delete(url, params) {
    const config = {
      method: 'delete',
      params,
      url
    }
    return service(url, config)
  }
  // put
  put(url, params) {
    const config = {
      method: 'put',
      data: params,
      url
    }
    return service(url, config)
  }
}

export default new Request()