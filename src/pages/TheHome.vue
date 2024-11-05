<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" />
  <div v-if="!user">
    <button @click="handlerUser" class="btn btnPrimary">Авторизоваться</button>
  </div>
  <div v-else>Вы вошли в аккаунт</div>
  <ul v-for="note in getAllNotes" :key="note.title">
    <li>{{ note.title }}</li>
  </ul>
  <button @click="allNotes" class="btn btnPrimary">allNotes</button>

  <div v-else><p>Пользователь {{ user.name }} вошел в аккаунт</p></div>
  <h1>Все пользователи</h1>
  <ul v-for="user in getUsersAdmin" :key="user.id">
    <li>{{ user.id }}</li>
    <li>{{ user.name }}</li>
    <li>{{ user.admin ? 'Это админ' : 'Это пользователь' }}</li>
  </ul>
  <p>{{ getUsersLength }}</p>
  <br />
  <br />
  <form>
    <p>Введите id пользователя</p>
    <input v-model="userId" type="number" />
  </form>
  <p>{{ getUsersById }}</p>
  <div v-if="getUsersById.id">
    <p>{{ getUsersById.name }}</p>
    <p>{{ getUsersById.admin ? 'Это админ' : 'Это пользователь' }}</p>
  </div>
</template>

<script>
import Form from '@/components/Notes/NotesForm';
import List from '@/components/Notes/NotesList';
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
    getAllNotes() {
      return this.$store.getters.getAllNotes;
    },
    //-------------
    user() {
      return this.$store.getters.user;
    },
    getAllUsers() {
      return this.$store.getters.getAllUsers;
    },
    getUsersLength() {
      return this.$store.getters.getUsersLength;
    },
    getUsersAdmin() {
      return this.$store.getters.getUsersAdmin;
    },
    getUsersById() {
      return (
        this.$store.getters.getUsersById(this.userId) ||
        'Такого пользователя нет'
      );
    },
  },
  mounted() {
    this.allNotes();
    //получаем Ноты из Локалсторедж при загрузке компонента
    // this.getNotes();
  },
  methods: {
    allNotes() {
      const allNotes = this.$store.getters.getAllNotes;
      localStorage.setItem('allNotes', JSON.stringify(allNotes));
      console.log(allNotes);
    },
    //добавление новой Ноты в массив Нот
    handleSubmit({ title, activeTags }) {
      const note = {
        title: title,
        tags: activeTags,
      };
      this.AllNotes.push(note);
    },
    //получаем Ноты из Локалсторедж
    // getNotes() {
    //   const localNotes = localStorage.getItem('getAllNotes');
    //   if (localNotes) {
    //     this.getAllNotes = JSON.parse(localNotes);
    //   }
    // },
    //------------------
    handlerUser() {
      this.$store.dispatch('setUser');
    },
  },
  watch: {
    //следим за Нотами и отправляем Ноты в Локалсторедж
    allNotes: {
      handler(upgradeList) {
        localStorage.setItem('allNotes', JSON.stringify(upgradeList));
      },
      deep: true,
    },
  },
};
</script>
