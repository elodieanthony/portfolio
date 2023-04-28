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
      menu_items: [
        { name: 'ABOUT', link: '/about' },
        { name: 'PROJECTS', link: '/projects' },
        { name: 'CONTACT', link: '/contact' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500');

body {
  margin: 0;
}

html {
  font-family: 'Inter', sans-serif;
  font-weight: 200;
}
#app {
  margin: 1rem;
}

h2 {
  font-size: 2rem;
}

ul {
  padding: 0;
  list-style: none;
}
a {
  color: black;
  text-decoration: none;
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
}
</style>
