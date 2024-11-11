import { createStore } from 'vuex';

export const store = createStore({
  state: {
    notes: [
      {
        title: 'Закончить курс',
        tags: ['work', 'home'],
      },
      {
        title: 'Выполнить ДЗ',
        tags: ['home'],
      },
      {
        title: 'Уйти в отпуск',
        tags: ['travel'],
      },
    ],
  },
  mutations: {
    setNote(state, note) {
      state.notes.push(note);
    },
    setLocalNotes(state, notes) {
      state.notes = notes;
    },
  },
  actions: {
    setNote({ commit }, note) {
      commit('setNote', note);
    },
    setLocalNotes({ commit }, notes) {
      commit('setLocalNotes', notes);
    },
  },
  getters: {
    getAllNotes(state) {
      return state.notes;
    }
  },

});
