import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CommentInput from './CommentInput';

class App extends React.Component {
  // 静态属性  存组件的状态
  state = {
    commentList: []
  }
  onPushlish = (userName,comment) => {
    // console.log(userName,comment)
    let c = {userName,comment}
    // 不可变数据 
    // let obj = {};let obj1 = obj;obj1.name = 'li'   //可变  obj1的变化会影响obj的变化
    // let obj1 = Objct.assign({},obj) //浅拷贝 
    let list = this.state.commentList      //浅拷贝一份
    list.push(c)
    this.setState({
      commentList:list
    })
    console.log(list,this.state.commentList)
  }
  handleDel = (event) => {
    //  del i i为要删除那项的索引
    // 将 data-i 取出来
    const i = parseInt(event.target.dataset.i)
    const list = this.state.commentList.slice(0) //浅拷贝
    list.splice(i,1)
    this.setState({  //数据变化了 调用 setState 更新页面数据
      commentList:list
    })
  }
  render() {
    return (
      <>
        <CommentInput onPushlish={this.onPushlish}/>
        {/* <CommentList /> */}
        { this.state.commentList.length } 
        {/* js运算加一个{} */}
        { this.state.commentList && this.state.commentList.map((c,i) => {  //map c代表数组里面的每一项 i表示索引
          return (
            <li key = {i}>
              {c.userName}:{c.comment}
              <button data-i = {i} onClick = {this.handleDel}>删除</button>
            </li>
          )
        }) }
      </>
    )
  }
}

export default App;
