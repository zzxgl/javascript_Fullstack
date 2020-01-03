import _ from 'lodash'  //引入lodash 名字为_
import './style/index.css'
import './style/leo.scss'

function createElement() {
  let div = document.createElement('div')
  div.innerHTML = _.join(['my','name','is','wn'],'')
  div.className = 'box'
  return div
}
document.body.appendChild(createElement())