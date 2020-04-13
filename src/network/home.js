import {request} from './request';

// 封装所有的首页数据请求，再导出,会有多个请求

export function getHomeMultidata(){  //home基本数据
  return request({
    url:'/home/multidata'
  })
}

export function getHomeGoods(type,page){  //home分类图片数据
  return request({
    url:'/home/data',
    params:{
      type,page
    }
  })
}


