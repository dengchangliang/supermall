<template>
  <div id="app">

    <MainTarbar class="MainTarbar"></MainTarbar>
    <keep-alive exclude="{Datail,type}">	<router-view></router-view></keep-alive>

  </div>
</template>

<script>
import MainTarbar from 'components/content/mainTarbar'

export default {
  name: 'App',
  components: {
      MainTarbar
  }
}
</script>

<style>
	@import './assets/css/base.css'
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;text-align: left;


}
 *{
   margin: 0;padding: 0;
 }
 .MainTarbar{
   z-index: 100;background-color: #afafaf;
 }
</style>
