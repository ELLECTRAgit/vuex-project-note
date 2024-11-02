import { createStore } from 'vuex';


export const store = createStore({
    state: {
        user: null,
        users: [
            {
                id: 1,
                name: 'Igor',
                admin: true
            },
            {
                id: 2,
                name: 'Alex',
                admin: false
            },
            {
                id: 3,
                name: 'Evgenii',
                admin: false
            }
        ]
    },
    mutations: {
        setUser (state, fakeUser) {
            state.user = fakeUser;
            console.log('Mutations on');
        }
    },
    actions: {
        setUser (context) {
            console.log('Actions on');
            const fakeUser = {
                id: 222,
                name: 'Fake',
                admin: true
            }
            context.commit('setUser', fakeUser);
        }
    },
    getters: {
        user (state) {
            return state.user
        },
        getAllUsers (state) {
            return state.users
        },
        //Эта же запись с помощью стрелочной функции
        // getUsers: (state) => state.users

        getUsersLength (state, getters) {
            const sufix = 'Общее количество пользователей'
            return `${sufix} ${getters.getAllUsers.length}`
        },
        getUsersAdmin (state) {
            return state.users.filter((user => !user.admin))
        },
        getUsersById: state => id => state.users.find(user => user.id == id)
    }
});
