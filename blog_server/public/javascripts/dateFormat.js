// 获取当前时间
exports.localDate = (v = Date.now()) => {
  const date = new Date(v)
  return date.toLocaleDateString() + ` ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}