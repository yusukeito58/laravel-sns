import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './page/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;