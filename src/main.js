import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store.js'
import VueRouter from 'vue-router'
import RegistrationPage from './components/RegistrationPage.vue'
import ShowEmployees from './components/ShowEmployees.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
const routes=[{name:'ShowEmployees',path:'/',component:ShowEmployees},
{name:'RegisterEmployee',path:'/register',component:RegistrationPage}
]
const router=new VueRouter({routes});
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
