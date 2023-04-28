<template>
  <div class="project-detail">
    <video controls autoplay>
      <source :src="project.video" type="video/mp4" />
    </video>
    <h1>{{ project.title.toUpperCase() }}</h1>
    <div class="content">
      <p>{{ project.description }}</p>
      <h2>PROJECT INFO</h2>
      <BasicTable :tableItems="tableItems"></BasicTable>
    </div>
  </div>
</template>

<script>
import BasicTable from '../components/BasicTable.vue';

export default {
  name: 'ProjectDetails',
  components: {
    BasicTable,
  },
  computed: {
    projectId() {
      return Number(this.$route.params.id);
    },

    project() {
      return this.$store.state.projects.find(
        project => project.id === this.projectId
      );
    },
    tableItems() {
      return [
        {
          key: 'role',
          title: 'Role',
          content: this.project.role,
        },
        {
          key: 'year',
          title: 'Year',
          content: this.project.date,
        },
        {
          key: 'stack',
          title: 'Stack',
          content: this.project.stack.join(', '),
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
video {
  margin-top: 1rem;
  width: 100%;
}

h2 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 3rem;
}
</style>
