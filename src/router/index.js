import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import SectionView from '../views/SectionView.vue'
import SingleSection from '../components/Section/SingleSection.vue'
import PublicationView from '../views/PublicationView.vue'
import PostView from '../views/PostView.vue'
import ProjectView from '../views/ProjectView.vue'

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
  },
  {
    path: '/publications',
    name: 'publications',
    component: PublicationView
  },
  {
    path: '/post',
    name: 'post',
    component: PostView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectView
  }
]

const router = new VueRouter({
  routes
})

export default router
