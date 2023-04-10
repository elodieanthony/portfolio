<template>
  <SideMenu @close="handleSideMenuClose">
    <NavLinks
      @close="handleSideMenuClose"
      :menuItems="menuItems"
      :isMobile="isSideMenuOpen"
    ></NavLinks>
  </SideMenu>
  <div class="main-navigation">
    <header class="main-navigation__header">
      <div class="main-navigation__logo"><a href="/">Elodie Anthony</a></div>
      <button class="main-navigation__button" @click="handleSideMenuOpen">
        Menu
      </button>
    </header>
    <nav class="main-navigation__nav">
      <NavLinks :menuItems="menuItems"></NavLinks>
    </nav>
  </div>
</template>

<script>
import { gsap, Expo } from 'gsap';

import NavLinks from './NavLinks.vue';
import SideMenu from './SideMenu.vue';

export default {
  name: 'MainNavigation',
  components: {
    NavLinks,
    SideMenu,
  },
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isSideMenuOpen: false,
      isAnimationPlaying: false,
    };
  },
  watch: {
    isSideMenuOpen(value) {
      const timeline = gsap.timeline({ paused: true });
      const activeLinkUnderline = document.querySelector(
        '.nav-links--active a span'
      );
      if (value) {
        timeline.to('.side-menu', {
          duration: 1,
          right: 0,
          ease: Expo.easeInOut,
          delay: 0.2,
        });
        timeline.fromTo(
          '.nav-links ul li',
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.05, duration: 0.4 }
        );
        timeline.fromTo(
          activeLinkUnderline,
          { scaleX: 0 },
          { scaleX: 1, stagger: 0.1, duration: 0.3 }
        );
      } else {
        timeline.fromTo(
          '.nav-links ul li',
          { x: 0, opacity: 1 },
          { x: 100, opacity: 0, stagger: 0, duration: 0.2 }
        );
        timeline.to('.side-menu', {
          duration: 1,
          right: '-100%',
          ease: Expo.easeInOut,
          //   delay: 0.2,
        });
      }
      timeline.play();
    },
  },
  methods: {
    handleSideMenuOpen() {
      this.isSideMenuOpen = true;
    },

    handleSideMenuClose(val) {
      this.isSideMenuOpen = val;
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'Navigation.scss';
</style>
