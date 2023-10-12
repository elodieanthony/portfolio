<template>
  <aside class="side-menu">
    <header class="side-menu__header">
      <router-link to="/">Elodie Anthony</router-link>
      <button class="side-menu__button" @click="closeSideMenu">FERMER</button>
    </header>
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'SideMenu',

  methods: {
    closeSideMenu() {
      this.$emit('close', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'SideMenu.scss';
</style>
