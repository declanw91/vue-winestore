import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWineGlassAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
library.add(faWineGlassAlt)
library.add(faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
