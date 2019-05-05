import axios from 'axios'

const service = axios.create({
  baseURL: 'api',
  timeout: 5000
});

service.interceptors.response.use(res => {
  if (res.status !== 200) {
    alert('接口错误')
  } else {
    return res
  }
},error => {
  alert(error)
});


export default service;
