<template>
  <section class="projects-page">
    <h2>MES PROJETS</h2>
    <div class="content">
      <!-- <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        voluptate quis sapiente voluptatum praesentium nostrum assumenda quas
        vero in. Hic similique tempore, quaerat quo odio nesciunt repudiandae
        numquam aperiam aspernatur.
      </p> -->
      <TableProject :tableItems="this.$store.state.projects"></TableProject>
    </div>
    <Footer footerClass="footer--abs" />
  </section>
</template>

<script>
import Table from '@/components/Table.vue';
import TableProject from '../components/TableProject.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'ProjectPage',
  components: {
    TableProject,
    Footer,
  },
};
Table;
</script>

<style lang="scss" scoped>

h2 {
  margin-bottom: 3rem;
}

p {
  margin: 3rem 0;
}
</style>
