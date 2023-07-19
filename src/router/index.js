import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Muhamad Rizki Ismail || Beranda",
      component: () => import("../views/homePage"),
    },
    {
      path: "/about-me",
      name: "Muhamad Rizki Ismail || Tentang Saya",
      component: () => import("../views/aboutMePage"),
    },
    {
      path: "/contact-me",
      name: "Muhamad Rizki Ismail || Hubungi Saya",
      component: () => import("../views/contactMePage"),
    },
  ],
});
router.beforeEach((to) => {
  document.title = to.name;
});

export default router;
