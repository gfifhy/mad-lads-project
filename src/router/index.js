import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/TeaserView.vue"),
    meta: {
      title: "Mad Lads",
    },
  },
  {
    path: "/in-progress",
    name: "progress",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: "Mad Lads",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
