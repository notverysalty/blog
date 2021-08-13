// 文章api汇总
const article = {
  // 添加新的博文
  addArticle: '/blog/addArticle',
  // 删除博文
  removeArticle: '/blog/removeArticle',
  // 修改博客
  updateArticle: '/blog/updateArticle',
  // 根据文章id获取博文
  getArticle: '/blog/getArticle',
  // 查询指定数量的博文列表
  getAssignedArticle: '/blog/getAssignedArticle',
  // 删除评论
  removeComment: '/comment/removeComment'
}

// 标签api汇总
const tag = {
  // 添加新标签
  addTag: '/tag/addTag',
  // 删除标签
  removeTag: '/tag/removeTag',
  // 修改标签
  updateTag: '/tag/updateTag',
  // 获取指定数量标签
  getTag: '/tag/getTag'
}

// 类型api汇总
const type = {
  // 增加新类型
  addType: '/type/addType',
  // 删除类型
  removeType: '/type/removeType',
  // 修改类型
  updateType: '/type/updateType',
  // 获取指定数量类型
  getType: '/type/getType'
}

// 登录页api
const login = {
  // 添加新用户
  addUser: '/user/addUser',
  // 删除用户
  removeBlogger: '/user/removeBlogger',
  // 登录
  login: '/user/login'
}

// 上传
const upload = {
  // 上传图片
  img: '/upload/img',
  // 删除图片
  removeImg: '/upload/removeImg'
}

export {
  article,
  tag,
  type,
  login,
  upload
}