<template>
  <section class="projects-page">
    <h2>SOME OF MY WORK</h2>
    <div class="content">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        voluptate quis sapiente voluptatum praesentium nostrum assumenda quas
        vero in. Hic similique tempore, quaerat quo odio nesciunt repudiandae
        numquam aperiam aspernatur.
      </p>
      <TableProject :tableItems="this.$store.state.projects"></TableProject>
    </div>
  </section>
</template>

<script>
import Table from '@/components/Table.vue';
import TableProject from '../components/TableProject.vue';
export default {
  name: 'ProjectPage',
  components: {
    TableProject,
  },
};
Table;
</script>

<style lang="scss" scoped>
p {
  margin: 3rem 0;
}
</style>
