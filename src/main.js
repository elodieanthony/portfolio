import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import ProjectPage from './views/Projects.vue';
import ContactPage from './views/Contact.vue';
import ProjectDetails from './views/ProjectDetails.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/projects', component: ProjectPage },
    { path: '/about', component: AboutPage },
    { path: '/contact', component: ContactPage },
    {
      path: '/projects/:id',
      name: 'projectDetails',
      component: ProjectDetails,
      props: true,
    },
  ],
});

const store = createStore({
  state() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.Ducimus voluptate quis sapiente voluptatum praesentium nostrum assumenda quas vero in.',
          date: '/2020',
          role: 'Web Déveloper',
          stack: ['Html', 'Css', 'JS'],
          video: require('@/assets/test.mp4'),
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'Description du projet 2',
          date: '/2018',
          role: 'Web Déveloper',
          stack: ['Html', 'Css', 'JS'],
          video: require('@/assets/test.mp4'),
        },
        {
          id: 2,
          title: 'Project 3',
          description: 'Description du projet 3',
          date: '/2022',
          role: 'Web Déveloper',
          stack: ['Html', 'Css', 'JS'],
          video: require('@/assets/test.mp4'),
        },
      ],
    };
  },
  getters: {
    getProjectById: state => id => {
      return state.projects.find(project => project.id === id);
    },
  },
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
