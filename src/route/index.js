import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/HomePage.vue";

import Animations from "../pages/Animations.vue";

const routes = [
  { path: "/", component: Home },

  {
    path: "/animations",
    component: Animations,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
