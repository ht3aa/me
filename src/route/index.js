import { createRouter, createWebHashHistory } from "vue-router";
import Cards from "../pages/Cards.vue";
import Home from "../pages/Home.vue";
import Texts from "../pages/Texts.vue";

const routes = [
  { path: "/", component: Home },
  {
    path: "/cards",
    component: Cards,
  },
  {
    path: "/texts",
    component: Texts,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
