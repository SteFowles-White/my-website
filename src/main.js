import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './router/routes'


import TheSiteHeader from './components/headerFooter/TheSiteHeader'
import TheSiteFooter from './components/headerFooter/TheSiteFooter.vue'
import Nav from './components/headerFooter/Nav.vue'


import HeaderBlock from './components/blocks/HeaderBlock'
import ThreeBlockContent from './components/blocks/ThreeBlockContent'
import DiagonalContent from './components/blocks/DiagonalContent'
import Swiper from './components/Swiper'



//------------------------------------
//         CORE COMPONETENT
//------------------------------------
Vue.component( 'TheSiteHeader' , TheSiteHeader )
Vue.component( 'Navigation' , Nav )
Vue.component( 'TheSiteFooter' , TheSiteFooter )


//------------------------------------
//         Blocks
//------------------------------------
Vue.component( 'HeaderBlock' , HeaderBlock )
Vue.component( 'ThreeBlockContent' , ThreeBlockContent )
Vue.component( 'Swiper' , Swiper )
Vue.component( 'DiagonalContent' , DiagonalContent )

//------------------------------------
//         CORE PAGES
//------------------------------------

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
