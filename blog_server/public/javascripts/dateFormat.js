// 获取当前时间
exports.localDate = (v = Date.now()) => {
  return new Date(v).toLocaleDateString()
}