<template>
  <ul class="table">
    <li
      class="table__line"
      v-for="item in tableItems"
      :key="item.key"
      :class="{ expanded: item.expanded, collapsed: !item.expanded }"
      ref="itemElements"
    >
      <div class="table__title" @click="toggleLine(item)">
        <div class="table__text-title">
          {{ item.title }}
        </div>
        <div class="table__cross" @click="toggleLine(item)"></div>
      </div>
      <div class="table__text-wrapper">
        <div
          class="table__text"
          :style="{ maxHeight: item.expanded ? item.textHeight : '0' }"
        >
          {{ item.text }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TableElement',
  props: {
    tableItems: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleLine(item) {
      item.expanded = !item.expanded;
      item.expanded ? this.setTextHeight(item) : (item.textHeight = '0px');
    },
    setTextHeight(item) {
      const index = this.tableItems.indexOf(item);
      const itemElement = this.$refs.itemElements[index];
      if (itemElement) {
        const textElement = itemElement.querySelector('.table__text');
        item.textHeight = textElement.scrollHeight + 'px';
      }
    },
  },
  mounted() {
    // this.tableItems.map((item, index) => this.setTextHeight(item, index));
  },
  updated() {
    this.tableItems.map((item, index) =>
      item.expanded
        ? this.setTextHeight(item, index)
        : (item.textHeight = '0px')
    );
  },
};
</script>

<style lang="scss" scoped>
.table {
  &__line {
    width: 100%;
    padding: 1rem 0;
    border-bottom: 1px solid black;
    overflow: hidden;

    &.collapsed {
      transition: all 0.3s ease;
      max-height: 2rem;
    }

    &.expanded {
      transition: all 0.3s ease;
      max-height: 1000px;
    }

    &.expanded .table__text {
      margin-top: 1rem;
    }
  }

  &__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: 1px solid;
  }

  &__text-wrapper {
    overflow: hidden;
  }
  &__text {
    margin-top: 0;
    transition: all 0.3s ease;
  }

  &__cross {
    position: relative;
    font-size: 1.5rem;
    cursor: pointer;

    &::before, &::after {
      transition: transform 0.3s ease-out;
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 12px;
      height: 1px;
      background-color: black;
    }
    &::after {
        transform: rotate(90deg);
    }
  }

  &__line.expanded {
    .table__cross::after {
      transform: rotate(0deg);
    }
  }
}
</style>
