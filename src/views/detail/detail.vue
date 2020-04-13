<template>
  <div id="detail">
      <Navbar class="home-bar">
        <div slot="center" class="title">
            <div v-for="(item,index) in titles" class="title-item" :key="index"
            @click="changeItem(index)"
            :class="{active:currenIndex==index}">
            {{item}}</div>
        </div>
        <div slot="left" @click="goBack">
            返回
        </div>
      </Navbar>

      <DetailsBaseInfo :goods="goods"></DetailsBaseInfo>

       <div class="info-img">
            <img v-for="(item2,index2) in infoImg" :src="item2" :key="index2" alt="">
      </div>


  </div>
</template>

<script>
  import Navbar from 'components/common/navbar/Navbar.vue'
    import DetailsBaseInfo from './DetailsBaseInfo.vue'
  import {getDetail,Goods} from  'network/detail'
  export default{
    name:'Datail',
    components:{
      Navbar,DetailsBaseInfo
    },
    data() {
      return {
        titles:['商品','参数','评论','推荐'],
        iid: null,
        currenIndex:0,
        detail:null,
        goods:{},
        infoImg:[]
      }
    },
    created() {
      // 1.后去传入的id
      this.iid=this.$route.params.iid;
      //2.根据id请求数据
      getDetail(this.iid).then(res=>{

        this.detail=res.data
        const data=res.data.result;
        console.log(data)
        //1.获取正品信息，整合通过
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        this.infoImg=data.detailInfo.detailImage[0].list;
      });
      
      
      this.$nextTick(()=>{
          console.log('渲染完成')
      })
      
    },
    methods:{
      changeItem(index){
        this.currenIndex=index;
      },
      goBack(){
         this.$router.go(-1);
      },
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;z-index: 200;background: #fff;
    padding-top: 44px;
  }
  .home-bar{
    background: #fff;
  }
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;font-size: 12px;cursor: pointer;
  }
  .active{
    color: #00ff7f;
  }
  li{
    height: 200px;
  }
  .info-img img{width: 100%;}
</style>
