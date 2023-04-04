<template>
  <aside class="side-menu">
    <button @click="closeSideMenu">Close</button>
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

<style></style>
