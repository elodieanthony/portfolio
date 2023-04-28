<template>
  <section class="about">
    <div class="content">
      <div class="about-intro">
        <div class="about__picture picture-container">
          <img src="../assets/about.jpg" alt="about" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          voluptate quis sapiente voluptatum praesentium nostrum assumenda quas
          vero in. Hic similique tempore, quaerat quo odio nesciunt repudiandae
          numquam aperiam aspernatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          voluptate quis sapiente voluptatum praesentium nostrum assumenda quas
          vero in. Hic similique tempore, quaerat quo odio nesciunt repudiandae
          numquam aperiam aspernatur.
        </p>
      </div>
      <div class="about__work">
        <h2>HOW DO I WORK</h2>
        <TableElement :tableItems="table_items"></TableElement>
      </div>
    </div>
  </section>
</template>

<script>
import TableElement from '../components/Table.vue';

export default {
  name: 'AboutPage',
  components: {
    TableElement,
  },
  data() {
    return {
      table_items: [
        {
          title: 'Test',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimusvoluptate quis sapiente voluptatum praesentium nostrum assumenda quas vero in. Hic similique tempore, quaerat quo odio nesciunt repudiandae numquam aperiam aspernatur',
        },
        {
          title: 'Test2',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimusvoluptate quis sapiente voluptatum praesentium nostrum assumenda quas vero in. Hic similique tempore, quaerat quo odio nesciunt repudiandae numquam aperiam aspernatur',
        },
      ],
    };
  },
};
</script>

<style></style>
