import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.scss'
import router from './router'
import jQuery from 'jquery'
import Popper from 'popper.js'
import VuePageTransition from 'vue-page-transition'
global.jQuery = jQuery;
global.Popper = Popper;

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMobileDetection from 'vue-mobile-detection'
Vue.use(VueMobileDetection)

Vue.use(VueMaterial)
Vue.config.productionTip = false
Vue.use(VuePageTransition)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
