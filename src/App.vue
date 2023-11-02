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
};
</script>

<style lang="scss">
@import 'assets/scss/main.scss';
</style>
