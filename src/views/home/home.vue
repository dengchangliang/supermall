<template>
  <div id='home'>
    <Navbar class='home-nar'>
      <div slot='center'>购物街23</div>
    </Navbar> <!-- 标题 -->
    <div class="swipe">
      <!-- 轮播插件 -->
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index)  in banners" :key="index">
          <img :src="item.image" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <RecommendView :recommends="recommends"></RecommendView>
    <!--热门推荐 -->
    <Feature @show1="logmsg(arguments)"></Feature>
    <!--流行图片 -->
    <van-sticky :offset-top="34">
      <tabControl @tabClick="tabClick" class="tabControl" :titles="['流行','新款','精选']"></tabControl>
    </van-sticky>

    <van-list v-model="loading" :error.sync="error" error-text="请求失败，点击重新加载" @load="onLoad" :finished="finished"
      finished-text="没有更多了" :immediate-check="immediate" offset='100'>
      <GoodList :goods="goods[currentType].list"></GoodList>
    </van-list>


  </div>
</template>

<script>
  import Navbar from 'components/common/navbar/Navbar.vue'
  import tabControl from 'components/content/tabControl/tabControl.vue'
  import GoodList from 'components/content/goods/GoodsList.vue'

  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home.js'
  import RecommendView from './Child/RecommendView.vue'
  import Feature from './Child/Feature.vue'
  import {
    getUrl,
    GetUrlParam
  } from 'assets/js/getParams'
  // import {debounce} from 'common/utils.js'

  export default {
    name: 'Home',
    components: {
      Navbar,
      RecommendView,
      Feature,
      tabControl,
      GoodList
    },
    data() {
      return {
        test: 'ceshi',
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          },
        },
        saveY: 0, //离开时保存的位置
        currentType: 'pop', //默认类型是流行
        loading: false, //上拉加载
        finished: true, //上拉加载 禁止默认触发事件
        error: false, //错误显示
        immediate: false, //初始化加载一次
      }
    },
    created() {



      // getUrl();

      

      console.log(GetUrlParam("id")) //页面获取URL上的参数
      // this.$http.get('/shouji.json',{

      // 			})
      // 			.then(res=>{
      // 				console.log(res)
      // 			}).catch(err=>{
      //              console.log(err)
      // 			})

      // 1.请求页面多个数据
      this.getHomeMultidata();
      //2.请求商品数据
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

    },
    destroyed() {
      console.log('销毁home')
    },
    activated() { //
      // this.$refs.scroll.scrollTo(0,this.saveY,0)
      console.log('进入')
    },
    deactivated() { //
      console.log('离开');
      // this.saveY=this.$refs.scroll.scroll.Y
    },

    computed: {
      // Goods(){
      //   return  this.goods[currentType].list
      // }
    },
    methods: {
      logmsg(msg){
        console.log(msg[0])
         console.log(msg[1])
      },
      // 网络请求
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          console.log(res)
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        }).catch(err => {
          console.log(err)
        })
      },

      getHomeGoods(type) {

        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          console.log(res.data.data.list);
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page = page;
          this.finished = false;
          // 加载状态结束
          this.loading = false
        }).catch(err => {
          this.error = true;
          console.log(err);
        })
      },
      // 事件监听
      tabClick(index) {
        console.log(index);
        if (index == 0) {
          this.currentType = 'pop';
        } else if (index == 1) {
          this.currentType = 'new';
        } else if (index == 2) {
          this.currentType = 'sell';
        }
      },

      onLoad() { //上拉刷新数据 vant
        console.log("onload")
        // 异步更新数据
        this.getHomeGoods(this.currentType);
      }
    },


  }
</script>

<style>
  #home {
    padding-top: 44px;
    padding-bottom: 49px;
  }

  .home-nar {
    background: #ff888f;
    color: #F3F3F3;
    z-index: 100;
  }

  .swipe {
    width: 100%;
    height: 150px;
  }

  .swipe img {
    width: 100%;
    height: 100%;
  }

  .tabControl {
    background: #fff;
    height: 100%;
  }
</style>
