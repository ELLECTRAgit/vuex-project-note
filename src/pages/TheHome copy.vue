<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from '@/components/Notes/NotesForm';
import List from '@/components/Notes/NotesList';

export default {
  data() {
    return {
      notes: [
        {
          title: 'Закончить курс',
          tags: ['work', 'home']
        },
        {
          title: 'Выполнить ДЗ',
          tags: ['home']
        },
        {
          title: 'Уйти в отпуск',
          tags: ['travel']
        }
      ],
    };
  },
  components: {
    Form,
    List,
  },
  watch: {
    notes: {
    handler (upgradeList) {
      localStorage.setItem('notes', JSON.stringify(upgradeList))
    },
    deep: true
    }
  },
  mounted () {
    this.getNotes ();
  },
  methods: {
    handleSubmit({title, activeTags}) {
      const note = {
        title: title,
        tags: activeTags
      }
      this.notes.push(note);
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    },
    getNotes () {
      const localNotes = localStorage.getItem('notes');
      if (localNotes) {
        this.notes = JSON.parse(localNotes);
      }
    }
  },
};
</script>
