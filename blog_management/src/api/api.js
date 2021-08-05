// 文章api汇总
const article = {
  // 添加新的博文
  addArticle: '/addArticle',
  // 删除博文
  removeArticle: '/removeArticle',
  // 修改博客
  updateArticle: '/updateArticle',
  // 根据文章id获取博文
  getArticle: '/getArticle',
  // 查询指定数量的博文列表
  getAssignedArticle: '/getAssignedArticle',
  // 删除评论
  removeComment: '/removeComment'
}

// 标签api汇总
const tag = {
  // 添加新标签
  addTag: '/addTag',
  // 删除标签
  removeTag: '/removeTag',
  // 获取指定数量标签
  getTag: '/getTag'
}

// 类型api汇总
const type = {
  // 增加新类型
  addType: '/addType',
  // 删除类型
  removeType: '/removeType',
  // 获取指定数量类型
  getType: '/getType'
}

// 登录页api
const login = {
  // 添加新用户
  addUser: '/addUser',
  // 删除用户
  removeBlogger: '/removeBlogger',
  // 登录
  login: '/login'
}

// 上传
const upload = {
  // 上传图片
  img: '/img',
  // 删除图片
  removeImg: '/removeImg'
}

export {
  article,
  tag,
  type,
  login,
  upload
}