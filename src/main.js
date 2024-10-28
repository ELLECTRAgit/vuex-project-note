import { createApp } from 'vue';
import App from './App.vue';
import routers from './routes';
import store from './store/index';
import '../src/assets/scss/main.scss';
const app = createApp(App);

//Хотим использовать routes
app.use(routers);
app.use(store);

app.mount('#app');
