<template>
  <ul class="table">
    <li
      class="table__line"
      v-for="(item, index) in tableItems"
      :key="item.key"
      @click="goToProjectDetails(item.id)"
      @mouseenter="showPicture(item.id)"
      @mouseleave="hidePicture(item.id)"
      :class="{ 'table__line--border-bottom': index >= tableItems.length - 1 }"
      ref="itemElements"
    >
      <div class="table__img" :id="'image-' + item.id">
        <img :src="item.image" :alt="item.title" />
      </div>
      <div class="table__content">
        <div class="table__title">
          {{ item.title }}
        </div>
        <div class="table__text">
          {{ item.text }}
        </div>
        <div class="table__date">{{ item.date }}</div>
      </div>
    </li>
  </ul>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'TableProject',
  props: {
    tableItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    goToProjectDetails(id) {
      this.$router.push({ name: 'projectDetails', params: { id: id } });
    },

    showPicture(itemId) {
      gsap.to(`#image-${itemId}`, {
        width: '20%',
        duration: 0.7,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      });
    },

    hidePicture(itemId) {
      gsap.to(`#image-${itemId}`, {
        width: 0,
        duration: 0.7,
        ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  &__line {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.5rem 0;
    border-top: 1px solid black;
    cursor: pointer;

    &--border-bottom {
      border-bottom: 1px solid black;
    }

    @media (min-width: 1024px) {
      padding: 0;
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__img {
    display: none;
    // height: auto;
    right: -100%;
    width: 0;
    margin-right: 1rem;

    @media (min-width: 1024px) {
      display: block;
    }

    img {
      height: auto;
      width: 100%;
    }
  }

  &__title {
    padding: 1rem 0;
    font-weight: 700;

    @media (min-width: 1024px) {
      padding: 3rem 0;
    }
  }

  &__date {
    font-weight: 700;
  }

  &__text {
    margin-top: 0;
    transition: all 0.3s ease;
  }
}
</style>
