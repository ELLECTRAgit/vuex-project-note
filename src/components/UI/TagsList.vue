<template>
  <div class="tags-list">
    <div
      class="tag-item"
      v-for="(item) in items"
      :key="item"
      @click="$emit('onItemClick', item)"
      :class="[{ isPreview: isPreview }, {isActiveItem: activeItems[item]}]"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
    activeItems: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &.isActiveItem {
    background-color: #444ce0;
    color: #ffffff;
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
