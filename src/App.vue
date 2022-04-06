<template>
  <div id="app"> 
    <Header> </Header>
 <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>

import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted() {
    //派发一个action||获取商品分类的三级列表的数据
    this.$store.dispatch('categoryList');
  
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
