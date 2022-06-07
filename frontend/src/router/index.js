import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsView from '../views/ProductsView'
import ClientsView from '../views/ClientsView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/productos',
    name: 'productos',
    component: ProductsView
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: ClientsView
  }
]

const router = new VueRouter({
  routes
})

export default router
