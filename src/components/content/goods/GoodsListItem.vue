<template>
  <div class="goods-item" @click="goDetail(goodsitem.iid)">
    <img :src="goodsitem.show.img"  alt="">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
       <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      goodsitem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      goDetail(id){
        this.$router.push('/detail/'+id)
      },
    }
  }
</script>

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    position: relative;width:48%;
  }
  .goods-item img{
    width: 100%;border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;position: absolute;bottom: 5px;left: 0;
    overflow: hidden;text-align: center;width: 100%;
  }
   .goods-info p{
     overflow: hidden;
     text-overflow: ellipsis;
     white-space: nowrap;
     margin-bottom: 3px;
   }
   .goods-info .price{
     color: red;margin-right: 20px;
   }
   .goods-info .collect{
     position: relative;
   }
    .goods-info .collect::before{
      content: '';
      position: absolute;
      left: -15px;
      top:-1px;width: 14px;height: 14px;
      background: url("~assets/img/collect.png");

    }

</style>
