import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import Authenticate from '../views/Authenticate.vue';
import Dashboard from '../views/Dashboard.vue';
import ScheduledInspections from '../views/ScheduledInspections.vue';
import ActiveInspection from '../views/ActiveInspection.vue';
import CompletedInspections from '../views/CompletedInspections.vue';
import Documentation from '../views/Documentation.vue';
import Settings from '../views/Settings.vue';
import About from '../views/About.vue'

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
    path: '/authenticate',
    name: 'Authenticate',
    component: Authenticate
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
    path: '/activeInspection/:id',
    name: 'ActiveInspection',
    component: ActiveInspection
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
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
