import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './router/routes'


import TheSiteHeader from './components/headerFooter/TheSiteHeader'
import TheSiteFooter from './components/headerFooter/TheSiteFooter.vue'


//------------------------------------
//         CORE COMPONETENT
//------------------------------------
Vue.component( 'TheSiteHeader' , TheSiteHeader )
Vue.component( 'TheSiteFooter' , TheSiteFooter )


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
