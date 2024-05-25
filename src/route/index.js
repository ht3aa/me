import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/HomePage.vue";
import Podcast from "../pages/Podcast.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/podcast", component: Podcast}
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
