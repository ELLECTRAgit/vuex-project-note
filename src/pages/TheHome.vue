<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" />
</template>

<script>
import Form from '@/components/Notes/NotesForm';
import List from '@/components/Notes/NotesList';
import { watchNotes } from '../components/utils/utils';
export default {
  data() {
    return {
      userId: 5,
    };
  },
  components: {
    Form,
    List,
  },
  computed: {
    notes() {
      return this.$store.getters.getAllNotes;
    },
  },
  mounted() {
    //получаем notes из localStorage при загрузке компонента
    this.allNotes();
  },
  methods: {
    allNotes() {
      const localNotes = JSON.parse(localStorage.getItem('notes'));
      if (localNotes) {
        this.$store.dispatch('setLocalNotes', localNotes);
      }
    },
    //добавление новой note в массив notes
    handleSubmit({ title, activeTags }) {
      const note = {
        title: title,
        tags: activeTags,
      };
      this.$store.dispatch('setNote', note);
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    },
  },
  watch: {
    //следим за notes и отправляем Ноты в localStorage
    notes: {
      handler(upgradeList) {
        watchNotes(upgradeList);
      },
      //чтобы отслеживать изменения во вложенных свойствах массива notes
      deep: true,
    },
  },
};
</script>
