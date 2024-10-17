module.exports = function reverse (n) {
  let num = Math.abs(n).toString()
  let l = num.length
  let newNum = 0
  for (let i = 0; i < l; i++) {
    newNum += parseInt(num[i]) * (10 ** i)
  }
  return newNum
}

