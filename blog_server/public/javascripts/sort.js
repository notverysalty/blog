exports.numberSort = (property) => {
  return (a, b) => {
    return a[property] - b[property]
  }
}