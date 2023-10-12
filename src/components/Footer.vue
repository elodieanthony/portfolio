<template>
  <footer class="footer" :class="footerClass">
    <p>©2023</p>
    <a href="https://www.linkedin.com/in/elodie-anthony-6b155228/">Linkedin</a>
  </footer>
</template>

<script>
export default {
  name: 'FooterELement',
  props: {
    footerClass: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--abs {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }

  &--abs-lg {
    @media (min-width: 1024px) {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
  // @media (min-width: 1024px) {
  //   position: absolute;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  // }
}
</style>
