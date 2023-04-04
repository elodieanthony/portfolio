import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
  ],
});
const app = createApp(App);
app.use(router);
app.mount('#app');
