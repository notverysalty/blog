exports.numberSort = (property) => {
  return (a, b) => {
    return b[property] - a[property]
  }
}