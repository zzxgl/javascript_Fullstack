// import {add} from './math.js'
// reduce 有必要存在 最终打包完的 dist文件里面吗？  不用，没有导入
import { add,reduce } from './math.js'
import { includes } from 'lodash'
// import { includes } from 'lodash/includes'
// import { includes } from 'underscore'
// import { includes } from 'lodash/disk/includes'
// 从lodash 工具库里面 导入 includes

console.log(add(1,2))
console.log(reduce(1,2))
console.log(includes([1,2],1))