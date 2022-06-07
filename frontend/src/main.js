import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Toast);

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:8000';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
