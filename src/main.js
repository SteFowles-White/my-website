import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './router/routes'


//------------------------------------
//         CORE COMPONETENT
//------------------------------------
import TheSiteHeader from './components/headerFooter/TheSiteHeader'
import TheSiteFooter from './components/headerFooter/TheSiteFooter.vue'
import Nav from './components/headerFooter/Nav.vue'

//------------------------------------
//         Blocks
//------------------------------------
import ContentBlock from './components/blocks/ContentBlock'
import DiagonalContent from './components/blocks/DiagonalContent'
import HeaderBanner from './components/blocks/HeaderBanner'
import HeaderBlock from './components/blocks/HeaderBlock'
import SimpleContentBlock from './components/blocks/SimpleContentBlock'
import Swiper from './components/Swiper'
import ThreeBlockContent from './components/blocks/ThreeBlockContent'



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
Vue.component( 'ContentBlock' , ContentBlock )
Vue.component( 'HeaderBanner' , HeaderBanner )
Vue.component( 'SimpleContentBlock' , SimpleContentBlock )


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
