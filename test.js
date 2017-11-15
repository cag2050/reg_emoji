const fs = require('fs')

let content = fs.readFileSync('test.txt','utf-8')
// console.log(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/.test(content))
console.log('全局匹配到表情的数量：')
console.log(content.match(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g).length)
console.log('全局匹配到表情为：')
console.log(content.match(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g))