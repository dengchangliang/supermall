<template>
  <div class="goods">
      <GoodsListItem  v-for="(item,index) in goods" :goodsitem="item" :key="index"></GoodsListItem>
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem.vue'
  export default{
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

</style>
