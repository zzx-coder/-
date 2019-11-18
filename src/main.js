import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios)

// vue-router
import router from './router.js'

// element-ui
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUi)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
