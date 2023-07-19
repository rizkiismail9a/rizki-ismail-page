import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Yuri's Page || Home",
      component: () => import("../views/homePage"),
    },
  ],
});
router.beforeEach((to) => {
  document.title = to.name;
});

export default router;
