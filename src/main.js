import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import ProjectPage from './views/Projects.vue';
import ContactPage from './views/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
  ],
});
const app = createApp(App);
app.use(router);
app.mount('#app');
