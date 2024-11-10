<template>
  <div class="note-form__wrapper">
    <form class="note-form">
      <textarea v-model="value" placeholder="Сделайте запись" />
      <TagsList :items="tags"
      @onItemClick="handlerTags"
      :activeItems="activeItems"
      v-if="tags && tags.length > 0"
       />
      <button @click="onSubmit" class="btn btnPrimary" type="submit">Добавьте запись</button>
    </form>
  </div>
</template>
<script>
import TagsList from '@/components/UI/TagsList.vue';
export default {
  components: {
    TagsList,
  },
  data() {
    return {
      value: '',
      tags: ['home', 'work', 'travel'],
      activeTags: [],
      activeItems: {},
    };
  },
  methods: {
    onSubmit() {
      const title = this.value;
      const activeTags = this.activeTags;
      console.log('tags array', activeTags);
      this.$emit('onSubmit', { title, activeTags });
      this.value = '';
      this.activeTags = [];
      this.activeItems = {};
    },
    handlerTags(tag) {
      const index = this.activeTags.indexOf(tag);
      if (index != -1) {
        this.activeTags.splice(index, 1);
        this.activeItems = { ...this.activeItems, [tag]: false };
        } else {
        this.activeTags.push(tag);
        this.activeItems = { ...this.activeItems, [tag]: true };
        }
      },
  },
};

</script>
<style>
.note-form {
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
