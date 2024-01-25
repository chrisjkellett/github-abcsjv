import './assets/main.css';

import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './';
import routes from './routes.js';

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
