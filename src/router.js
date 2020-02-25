import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import FinancialReports from './views/FinancialReports.vue'
import Students from './views/Students.vue'
import Home from './views/Home.vue'
import Admin from './views/Admin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/financialreports',
      name: 'financialreports',
      component: FinancialReports
    },
    {
      path: '/students',
      name: 'students',
      component: Students
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    }

  ]
})