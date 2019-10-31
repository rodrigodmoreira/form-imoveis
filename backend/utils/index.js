module.exports = {
  isNil: value => value === null || value === undefined,
  objToArr: obj => Object.keys(obj).map(k => obj[k])
}
