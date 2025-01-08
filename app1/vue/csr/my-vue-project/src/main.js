import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import ImagePage from './components/ImagePage.vue';
import HomePage from './components/HomePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/imagepage', component: ImagePage },
    { path: '/', component: HomePage },
  ],
});

const app = createApp(App);
app.use(router);

app.mount('#app'); // Mount the app only once
