import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Diary from "./Diary.vue";
import Home from "./Home.vue";
import MilkyWay from "./MilkyWay.vue";

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
  {
    path: "/milkyway",
    name: "MilkyWay",
    component: MilkyWay,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount("#app");
