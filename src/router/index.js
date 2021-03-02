import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services/ServicesPage.vue'
import Contact from  '../views/Contact.vue'

const routes = [
  {
    path: '/', redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { title: "GroupCisc - Soluciones Corporativas" }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: "GroupCisc - Acerca de" }
  },
  {
    path: '/services',
    name: 'Servicios',
    component: Services,
    meta: { title: "GroupCisc - Servicios", }
  },
  {
    path: '/contact',
    name: 'Contacto',
    component: Contact,
    meta: { title: "GroupCisc - Contacto", }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
