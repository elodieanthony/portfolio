import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import ProjectPage from './views/Projects.vue';
import ContactPage from './views/Contact.vue';
import ProjectDetails from './views/ProjectDetails.vue';

// const AboutPage = () => import('./views/AboutPage.vue');
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage, meta: { transition: 'fade' } },
    {
      path: '/about',
      component: AboutPage,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/projets',
      component: ProjectPage,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/contact',
      component: ContactPage,
      meta: { transition: 'slide-left' },
    },
    {
      path: '/projets/:id',
      name: 'projectDetails',
      component: ProjectDetails,
      meta: { transition: 'slide-right' },
    },
  ],
  scrollBehavior: () => {
    return { x: 0, y: 0 };
  },
});

const store = createStore({
  state() {
    return {
      projects: [
        {
          id: 1,
          title: 'Comparateur Télécom',
          description:
            "Intégration d'une application web de comparaison entre les différentes offres mobile et internet.",
          date: '/2018',
          role: 'Développeuse Frontend',
          stack: ['Html', 'Scss', 'Javascript(es6)'],
          video: require('@/assets/selectra.mp4'),
          image: require('@/assets/comparator.png'),
        },
        {
          id: 2,
          title: 'Portfolio Sébastien Veyre',
          description: "Intégration du portfolio d'un designer Lyonnais. ",
          date: '/2017',
          role: 'Web integration',
          stack: ['Html', 'Css', 'Jquery'],
          video: require('@/assets/sebV.mp4'),
          image: require('@/assets/seb.png'),
        },
        {
          id: 3,
          title: 'Heart@Hack',
          description:
            "Intégration d'une landing page pour le lancement du jeu mobile Heart@Hack.",
          date: '/2017',
          role: 'Web integration/Web Design',
          stack: ['Html', 'Css', 'Jquery'],
          video: require('@/assets/hah.mp4'),
          image: require('@/assets/hah.png'),
        },
      ],
      isTouchDevice: false,
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log('into');
    const toDepth = to.path.split('/').length;
    const fromDepth = from.path.split('/').length;
    this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right';
    next();
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
