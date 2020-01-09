import React, {useState} from 'react';   //Vue
import logo from './logo.svg';   //图片
import './App.css';   //样式文件


// 界面开发 核心的是组件
// vue 三明治（template+script+style) 
// react js +　template  App.js  .css另外放置一个文件   => .js .css
function App() {  //函数式组件
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    }

  ])  // state 状态
  return (  //用html写实际运行是js
    <div className = "app">
      {/* hello, react */}
      <div className = "header">
        <img src={logo} className="logo" alt="logo"/>
      </div>
      <form className="todo-list">
        <ul>
          {
            // js 运行区域
            // vue v-for
            // react map
            todos.map((todo,i) => (
              <li>
                {todo.content}
              </li>
            ))
          }
        </ul>
      </form>
    </div>
  )  
}

export default App;