import React from 'react';
class CommentInput extends React.Component {
  handlePublish = () => {
    const userName = this.refs.userName.value; //获取input框里面的值
    const comment = this.refs.comment.value;
    // 通知父组件 将获取的值存在数组里面  父子组件通信 父组件定义回调 子组件传参并且触发回调  props
    const { onPushlish } = this.props;  //React 内置的属性 pros
    onPushlish(userName,comment)  //js 小技巧 回调函数
  }
  render() {
    return (
    <>
     用户名： <input type="text" ref="userName"/>
     评论内容：<input type="text" ref="comment"/>
     <button onClick={this.handlePublish}>发布</button>
     </>
    )
  }
 
}
export default CommentInput;
