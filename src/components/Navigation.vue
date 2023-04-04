<template>
  <SideMenu
    :isShown="showSideMenu"
    v-if="showSideMenu"
    @close="handleSideMenuClose"
  >
    <NavLinks :menuItems="menuItems"></NavLinks>
  </SideMenu>
  <div class="main-navigation">
    <button class="main-navigation__button" @click="showSideMenu = true">
      Menu
    </button>
    <nav class="main-navigation__nav">
      <NavLinks :menuItems="menuItems"></NavLinks>
    </nav>
  </div>
</template>

<script>
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
      showSideMenu: false,
    };
  },
  methods: {
    handleSideMenuClose(b) {
      this.showSideMenu = b;
    },
  },
};
</script>

<style lang="scss">
a {
  color: black;
  text-decoration: none;
}
.main-navigation {
  &__nav {
    display: none;
  }
}
</style>
