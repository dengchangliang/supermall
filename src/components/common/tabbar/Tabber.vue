<template>
  <div id="Tabbar">
      <slot></slot>
  </div>
</template>

<script>
  export default{
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
 #Tabbar{
       display: flex;background: #f3f3f3;width: 100%;
       position: fixed;left: 0;bottom: 0;z-index: 100;
     }

</style>
