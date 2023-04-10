<template>
  <div class="nav-links">
    <ul>
      <li class="nav-links__li" :class="{ 'nav-links--active': isActive('/') }">
        <router-link to="/" @click="closeSideMenu"
          >HOME <span v-if="isActive('/')"></span
        ></router-link>
      </li>
      <li
        class="nav-links__li"
        v-for="(item, index) in menuItems"
        :key="item.key"
        :class="{ 'nav-links--active': isActive(item.link) }"
      >
        <router-link :to="item.link" @click="closeSideMenu"
          >{{ item.name }}<span v-if="isActive(item.link)"></span
        ></router-link>
        <span></span>
        <span
          class="nav-links__span"
          v-if="index !== menuItems.length - 1 && !isMobile"
          >,</span
        >
      </li>
    </ul>
  </div>
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
  computed: {
    isActive() {
      return link => this.$route.path === link;
    },
  },
  methods: {
    closeSideMenu() {
      this.$emit('close', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import 'NavLinks.scss';
</style>
