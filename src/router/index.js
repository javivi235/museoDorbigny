import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import SectionView from '../views/SectionView.vue'
import SingleSection from '../components/Section/SingleSection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/sections',
    name: 'sections',
    component: SectionView
  },
  {
    path: '/singleSection',
    name: 'section',
    component: SingleSection
  }
]

const router = new VueRouter({
  routes
})

export default router
