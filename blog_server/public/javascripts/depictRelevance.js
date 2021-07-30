// 第一个参数 数据表
// 第二个参数 iD
// 第三个参数 增加还是删除（true or false）
// 第四个参数 匹配要进行更新的数组字段
// 第五个参数 增加或删除的数量（+ or -）
exports.updepict = (tableName, id, judge, arr, val) => {
  if (judge) {
    return tableName.updateMany({name: {$in: arr}}, {$push: {list: id}, $inc: {num: val}})
  } 
  return tableName.updateMany({name: {$in: arr}}, {$pull: {list: id}, $inc: {num: val}})
}