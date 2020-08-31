import Vue from 'vue'
import Router from 'vue-router'
import Work from './views/Work.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/',
      name: 'work',
      component: Work
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})