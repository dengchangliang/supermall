<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
       <a :href="item.link">
         <img :src="item.image" alt="">
         <p>{{item.title}}</p>
       </a>
    </div>
  </div>
</template>

<script>
  export default{
    name:'RecomendView',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        key: null
      }
    }

  }
</script>

<style scoped>
  .recommend{
    display: flex;
    padding: 5px 0 20px 0;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item a{
    display: inline-block;width: 100%;height: 100%;text-align: center;
    text-underline: none;
  }
   .recommend-item img{
     display: inline-block;width: 80%;margin-top: 10px;
   }
     .recommend-item p{font-size: 12px;color: black;text-underline: none;}
</style>
