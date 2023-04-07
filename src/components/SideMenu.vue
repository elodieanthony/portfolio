<template>
  <aside class="side-menu">
    <header class="side-menu__header">
      <a href="/">Elodie Anthony</a>
      <button @click="closeSideMenu">Close</button>
    </header>
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'SideMenu',
  methods: {
    closeSideMenu() {
      this.$emit('close', false)
    }
  }
};
</script>

<style lang="scss">

.side-menu {
  &__header {
    display: flex;
    justify-content: space-between;
  }
}

</style>
