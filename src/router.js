import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Experiences from "./views/Experiences.vue";
import Others from "./views/Others.vue";
import Projects from "./views/Projects.vue";
import Research from "./views/Research";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: Experiences
    },
    {
      path: '/others',
      name: 'others',
      component: Others
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/research',
      name: 'research',
      component: Research
    }
  ]
})
