<template>
  <h1>Все пользователи</h1>
  <ul v-for="user in getUsersAdmin" :key="user.id">
    <li>{{ user.id }}</li>
    <li>{{ user.name }}</li>
    <li>{{ user.admin ? 'Это админ' : 'Это пользователь' }}</li>
  </ul>
  <p>{{ getUsersLength }}</p>
  <br>
  <br>
  <form>
    <p>Введите id пользователя</p>
    <input v-model="userId" type="number">
</form>
  <p>{{ getUsersById}}</p>
  <div v-if="getUsersById.id">
    <p>{{ getUsersById.name}}</p>
    <p>{{ getUsersById.admin ? 'Это админ' : 'Это пользователь'}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: 5,
    }
  },
  computed: {
    getAllUsers () {
      return this.$store.getters.getAllUsers
    },
    getUsersLength () {
      return this.$store.getters.getUsersLength
    },
    getUsersAdmin () {
      return this.$store.getters.getUsersAdmin
    },
    getUsersById () {
      return this.$store.getters.getUsersById(this.userId) || 'Такого пользователя нет'
    }
},
methods: {
},
watch: {

}
};
</script>
