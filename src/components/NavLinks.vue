<template>
  <ul class="nav-links">
    <li class="nav-links__li" v-for="item in menuItems" :key="item.key">
      <a href="/">{{ item }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'navLinks',
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  border: 1px solid red;
  &__li {
    padding: 0.5rem 0;
  }
}
</style>
