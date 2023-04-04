<template>
  <Navigation :menuItems="menu_items"></Navigation>
  <router-view></router-view>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  },
  data() {
    return {
      menu_items: ['About', 'Projects', 'Contact'],
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500&family=Roboto&display=swap');
html {
  font-family: 'Roboto', sans-serif;
}

ul {
  padding: 0;
  list-style: none;
}
</style>
