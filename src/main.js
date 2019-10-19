import Vue from 'vue'
import App from './App.vue'
import TheSiteHeader from './components/headerFooter/TheSiteHeader'
import TheSiteFooter from './components/headerFooter/TheSiteFooter.vue'





//------------------------------------
//         CORE COMPONETENT
//------------------------------------
Vue.component( 'TheSiteHeader' , TheSiteHeader )
Vue.component( 'TheSiteFooter' , TheSiteFooter )



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
