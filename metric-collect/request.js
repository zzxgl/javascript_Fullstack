import axios from 'axios';
import { request } from 'http';

const axiosIns = axios.createInstance({
  baseUrl:'http://localhost:3000',
  response:(res) => {  //拦截响应信息
    //ajax请求
    if(res.code === 200) {
      return res
    } else {
      alert('出错了')
    }
  }
})
export default axiosIns 
//   封装request
request('/suggest')
.then(res => {
  
})