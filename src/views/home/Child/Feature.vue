<template>
  <div class="feature">
      <a ><img str="imgbtnhahah" @click="show()" class="imgbtn" src="~assets/img/feature.png" alt=""></a>
  </div>
</template>

<script>
  export default{
    name:'feature',
    methods:{
        show(){
          this.$emit("show1",$(".imgbtn").attr("str"),false)
          // console.log($(".imgbtn").attr("str"))
        }
    },
  }
</script>

<style scoped>
  .feature{
    width: 100%;
  }
  .feature img{
    width: 100%;
  }
</style>
