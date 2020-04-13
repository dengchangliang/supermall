<template>
  <div class="tab-control">
    <div @click="changeTitle(index)" v-for="(item,index) in titles" :key="index" class="tab-control-item">
        <span :class="currentTndex==index?'on':''" >{{item}}</span>
    </div>

    <!--  <div v-for="item in title">
        <span>{{item}}</span>
      </div> -->
  </div>

</template>

<script>
  export default{
      name:'tabControl',
      props:{
        titles:Array
      },
      data() {
        return {
          currentTndex:0
        }
      },
      methods:{
        changeTitle(index){
            this.currentTndex=index;
            this.$emit("tabClick",index)
        },
     
      }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;margin-top: 10px;height: 40px;;height: 100%;line-height: 40px;
  }
   .tab-control-item{
      flex: 1;text-align: center;height: 40px;font-size: 15px;
   }
   .tab-control .on{
     color: pink;border-bottom: 2px solid pink;
   }

</style>
