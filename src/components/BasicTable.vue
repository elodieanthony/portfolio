<template>
  <ul class="table">
    <li
      class="table__line"
      v-for="(item, index) in tableItems"
      :key="item.key"
      :class="{ 'table__line--border-bottom': index >= tableItems.length - 1 }"
      ref="itemElements"
    >
      <div class="table__title">
        {{ item.title }}
      </div>

      <div class="table__content">{{ item.content }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TableProject',
  props: {
    tableItems: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  &__line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
    border-top: 1px solid black;
    &--border-bottom {
      border-bottom: 1px solid black;
    }
  }

  &__title {
    font-weight: 700;
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
