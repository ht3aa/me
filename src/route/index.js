import { createRouter, createWebHashHistory } from "vue-router";
import Cards from "../pages/Cards.vue";
import Home from "../pages/Home.vue";
import Texts from "../pages/Texts.vue";
import Cursors from "../pages/Cursors.vue";
import Hamburgers from "../pages/Hamburgers.vue";
import Navbars from "../pages/Navbars.vue";

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
  {
    path: "/cursors",
    component: Cursors,
  },
  {
    path: "/hamburgers",
    component: Hamburgers,
  },
  {
    path: "/navbars",
    component: Navbars,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
