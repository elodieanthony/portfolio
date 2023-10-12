<template>
  <Navigation :menuItems="menu_items"></Navigation>
  <router-view :isMobile="isMobile" v-slot="{ Component, route }">
    <transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
import Navigation from './components/Navigation.vue';
// import { gsap } from 'gsap';
const DEFAULT_TRANSITION = 'fade';

export default {
  name: 'App',
  components: {
    Navigation,
  },
  data() {
    return {
      menu_items: [
        { name: 'A PROPOS', link: '/about' },
        { name: 'PROJETS', link: '/projets' },
        { name: 'CONTACT', link: '/contact' },
      ],
      prevHeight: 0,
      transitionName: DEFAULT_TRANSITION,
    };
  },
  computed: {
    isMobile() {
      return window.innerWidth < 1024;
    },
  },
  watch: {},
  created() {
    // this.$router.beforeEach((to, from, next) => {
    //   let transitionName = to.meta.transitionName || from.meta.transitionName;
    //   if (transitionName === 'slide') {
    //     const toDepth = to.path.split('/').length;
    //     const fromDepth = from.path.split('/').length;
    //     transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    //   }
    //   this.transitionName = transitionName || DEFAULT_TRANSITION;
    //   next();
    // });
  },
  methods: {
    // beforeLeave(element) {
    //   this.prevHeight = getComputedStyle(element).height;
    // },
    // enter(element) {
    //   const { height } = getComputedStyle(element);
    //   element.style.height = this.prevHeight;
    //   setTimeout(() => {
    //     element.style.height = height;
    //   });
    // },
    // afterEnter(element) {
    //   element.style.height = 'auto';
    // },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500');

.slidefade-enter-active,
.slidefade-leave-active {
  transition: all ease-in-out 0.5s;
}

.slidefade-enter,
.slidefade-leave-to {
  transform: translate(30px);
  opacity: 0;
}

.swipe-left-enter-active,
.swipe-left-leave-active,
.swipe-right-enter-active,
.swipe-right-leave-active {
  transition: transform 0.5s ease;
}

.swipe-left-enter-to,
.swipe-left-leave-from,
.swipe-right-enter-to,
.swipe-right-leave-from {
  transform: translateX(0);
}

.swipe-left-enter-from,
.swipe-left-leave-to {
  transform: translateX(100%);
}

.swipe-right-enter-from,
.swipe-right-leave-to {
  transform: translateX(-100%);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  // height: calc(100vh - 2rem);
  height: 100vh;
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translate(2em, 0);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}

*,
*::before,
*::after {
  padding: 0;
  box-sizing: inherit;
}

:root {
  --color-bg: rgb(244 233 225 / 64%);
}
body {
  margin: 0;
}

html {
  box-sizing: border-box;
  font-family: 'Questrial', sans-serif;
  font-weight: 200;
  background-color: rgb(244 233 225 / 64%);
  color: #6b6969;
  line-height: 1.2;
}

#app {
  position: relative;
  height: calc(100vh - 2rem);
  padding: 1rem;
  @media (min-width: 1440px) {
    padding: 3rem;
  }
}

section {
  margin: auto;
  @media (min-width: 1400px) {
    // max-width: 80vw;
  }
  @media (min-width: 1800px) {
    max-width: 65vw;
  }
}

h2 {
  font-size: 2.5rem;
  font-weight: 500;
  color: #666262;
}

ul {
  padding: 0;
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
  line-break: anywhere;
}

@media (min-width: 768px) {
  .content {
    margin: 0 12%;
  }
}

.picture-container {
  margin: 2rem 0;
  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      object-fit: cover;
    }
  }
  @media (min-width: 1400px) {
    height: 350px;
  }
}

@keyframes pulse {
  0% {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
  // 20% {
  //   opacity: 1;
  //   transform: scale(1) translateZ(0);
  // }
  50% {
    opacity: 0.1;
    transform: scale(0.6) translateZ(0);
  }
  80% {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateZ(0);
  }
}
</style>
