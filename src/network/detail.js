import {request} from './request'

export function getDetail(iid){  //home详情页，根据ID请求数据
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}


export class Goods{   // 详情页，杂乱的数据整合
  constructor(itemInfo,columns,services){
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.discount=itemInfo.discountDesc
    this.columns=columns
    this.services=services
    this.realPrice=itemInfo.lowNowPrice
  }
}

// Object.key(obj).length===0   判断obj里是否有对象
