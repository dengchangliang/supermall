<template>
  <div>
 
    <Tabber>
      <TabberItem path="/home" activeColor="red">
       <img src="~assets/img/tabbar/home.png" alt="" slot="item-icon">
         <img src="~assets/img/tabbar/home_active.png" alt="" slot="item-icon-active">
        <span slot="item-text">首页</span>
      </TabberItem>
      <TabberItem path="/type" activeColor="red">
       <img src="~assets/img/tabbar/type.png" alt="" slot="item-icon">
         <img src="~assets/img/tabbar/type_active.png" alt="" slot="item-icon-active">
        <span slot="item-text">分类</span>
      </TabberItem>
      <TabberItem path="/buycar" activeColor="red">
       <img src="~assets/img/tabbar/buycar.png" alt="" slot="item-icon">
         <img src="~assets/img/tabbar/buycar_active.png" alt="" slot="item-icon-active">
        <span slot="item-text">购物车</span>
      </TabberItem>
      <TabberItem path="/my" activeColor="red">
       <img src="~assets/img/tabbar/my.png" alt="" slot="item-icon">
         <img src="~assets/img/tabbar/my_active.png" alt="" slot="item-icon-active">
        <span slot="item-text">我的</span>
      </TabberItem>
    </Tabber>
  </div>
</template>

<script>
  import Tabber from 'components/common/tabbar/Tabber.vue'
  import TabberItem from 'components/common/tabbar/TabberItem.vue'
 
  export default {
    name: 'App',
    components:{
      Tabber,
      TabberItem
    }
  }
</script>

<style>
</style>
