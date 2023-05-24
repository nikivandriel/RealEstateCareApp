import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import Dashboard from '../views/Dashboard.vue';
import ScheduledInspections from '../views/ScheduledInspections.vue';
import CompletedInspections from '../views/CompletedInspections.vue';
import Documentation from '../views/Documentation.vue';
import Settings from '../views/Settings.vue';
import About from '../views/About.vue'
import App2 from '../App2.vue'


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/scheduledInspections',
    name: 'ScheduledInspections',
    component: ScheduledInspections
  },
  {
    path: '/completedInspections',
    name: 'CompletedInspections',
    component: CompletedInspections
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: Documentation
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/app2',
    name: 'App2',
    component: App2
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
