import { createWebHistory, createRouter } from "vue-router";
import { createApp } from 'vue'
import Home from './Home.vue'
import Diary from './Diary.vue'
import App from './App.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/diary",
    name: "Diary",
    component: Diary,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app')