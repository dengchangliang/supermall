import axios from 'axios'


export function request(config){  //方式2
  // 1.创建axios实例
  const instance=axios.create({
		baseURL:'http://106.54.54.237:8000/api/h8',
    timeout:5000,
    // header:''
  })
  //一：.axios请求拦截器 请求拦截的作用
  instance.interceptors.request.use(config=>{
    return config;//要返回参数
  },err=>{
     console.log(err)
  })
  //二;响应拦截器的作用
  instance.interceptors.response.use(res=>{
    return res;//要返回参数
  },err=>{
     console.log(err)
  })
  // 3.发送真正的请求
  return instance(config)
}
