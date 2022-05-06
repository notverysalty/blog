import randomColor from 'randomcolor'

const giveColor = (target) => {
  const tags = new Array(target.length).fill(0).map(() => [])
  target.forEach((item, i) => {
    item.tags.forEach((tag) => {
      tags[i].push({
        name: tag, color: randomColor({
          luminosity: 'bright',
          format: 'rgb' // e.g. 'rgb(225,200,20)'
        })
      })
    })
  })
  return tags
}

const tagsColor = (target) => {
  target.unshift({name: '全部'})
  const tags = []
  target.forEach((item) => {
    if (item.status === false) {
      return
    }
    tags.push({
      name: item.name, color: randomColor({
        luminosity: 'bright',
        format: 'rgb' // e.g. 'rgb(225,200,20)'
      })
    })
  })
  return tags
}

export {
  giveColor,
  tagsColor
}