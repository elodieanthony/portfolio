<template>
  <div class="container">
    <section class="project-detail">
      <div class="project-detail__header">
        <video controls autoplay>
          <source :src="project.video" type="video/mp4" />
        </video>
        <h1>{{ project.title.toUpperCase() }}</h1>
      </div>
      <div class="content">
        <p>{{ project.description }}</p>
        <h2>INFO SUR LE PROJET</h2>
        <BasicTable :tableItems="tableItems"></BasicTable>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import BasicTable from '../components/BasicTable.vue';
export default {
  name: 'ProjectDetails',
  components: {
    BasicTable,
    Footer,
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
          title: 'Année',
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
.project-detail {
  @media (min-width: 1024px) {
    .content {
      margin: 0 25%;
      margin-bottom: 3rem;
    }
  }
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    // height: 100vh;
    margin-top: 5rem;
    align-items: center;
    &__header {
      width: 100%;
    }
    .content {
      margin: 0 2rem 0 0;
      width: 70%;
    }
  }
}
video {
  margin-top: 1rem;
  width: 100%;
  @media (min-width: 1440px) {
    margin-top: 0;
  }
}

h2 {
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 3rem;
}
</style>
