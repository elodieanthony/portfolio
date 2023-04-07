<template>
  <ul class="nav-links">
    <li class="nav-links__li" v-if="isMobile">
      <a href="/">Home</a>
    </li>
    <li
      class="nav-links__li"
      v-for="(item, index) in menuItems"
      :key="item.key"
    >
      <a :href="item.link">{{ item.name }}</a>
      <span></span>
      <span
        class="nav-links__span"
        v-if="index !== menuItems.length - 1 && !isMobile"
        >,</span
      >
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
    isMobile: Boolean,
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
  &__span {
    padding: 0 0.2rem;
  }
}
@media (min-width: '1024px') {
  .nav-links {
    flex-direction: row;
    height: inherit;
    justify-content: flex-end;
  }
}
</style>
