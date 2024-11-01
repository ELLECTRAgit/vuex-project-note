import { createApp } from 'vue';
import App from './App.vue';
import routers from './routes';
import {store} from './store/index.js';

import '../src/assets/scss/main.scss';
const app = createApp(App);

app.use(routers);
app.use(store);


app.mount('#app');
