import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './components/Dashboard.vue';
import ManagementData from './components/ManagementData.vue';
import Settings from './components/Settings.vue';

const routes = [
  { path: '/', component: Dashboard },
  { path: '/management', component: ManagementData },
  { path: '/settings', component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;