<template>
  <div id="app">
    <the-site-header></the-site-header>
      <router-view></router-view>    
    <the-site-footer></the-site-footer>
  </div>
</template>

<script>

export default {
  // data() {
  //   return {
  //     scroll: 5,
  //     scrolltheshold: 70

  //   }
  // },
  // methods: {
  //   handleScroll(){
  //    return  this.scroll = window.scrollY
  //   }
  // },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll());
  //   this.handleScroll();
  // },
  // destroyed(){
  //   window.removeEventListener('scroll', this.handleScroll());
  // }

}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
} */
</style>
