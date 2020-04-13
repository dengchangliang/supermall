<template>
  <div class="tab-bar-item" @click="itemClick">
    <div  v-if="!isActive" >
       <slot name='item-icon'>默认1</slot>
    </div>
    <div v-else >
        <slot name='item-icon-active'>默认2</slot>
    </div>

    <!--  <span  :class="{active:isActive}" >
         <slot name='item-text'>默认3</slot>
      </span> -->
      
      <!-- 绑定动态样式颜色 -->
      <span  :style="activeStyle" >   
         <slot name='item-text'>默认3</slot>
      </span>


   <!-- <img src="../../assets/img/buycar.png" alt="">
    <div>首页</div> -->
    </div>
</template>

<script>
  export default{
    data() {
      return {
        // isActive: true,
      }
    },
    props:{
      path:String,
      activeColor:{
        type:String,
        default:"red"
      }
    },
    computed:{
      isActive(){
        // /home ->   item1(/home)=true
        // return  false
        return this.$route.path.indexOf(this.path)!==-1   //找到了，就为true
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        console.log(this.path)
        this.$router.replace(this.path)
      },

    }
  }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;text-align: center;height: 49px;
  }
  .active{
    color: red;
  }
</style>
