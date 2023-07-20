import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home | Muhamad Rizki Ismail",
      component: () => import("../views/homePage"),
    },
    {
      path: "/about-me",
      name: "About Me | Muhamad Rizki Ismail",
      component: () => import("../views/aboutMePage"),
    },
    {
      path: "/contact-me",
      name: "Contact Me | Muhamad Rizki Ismail",
      component: () => import("../views/contactMePage"),
    },
    {
      path: "/portfolio",
      name: "Portfolio | Muhamad Rizki Ismail",
      component: () => import("../views/portfolioPage"),
      children: [
        {
          path: "/portfolio/:id",
          name: "art-preview",
          component: () => import("../views/artPreview"),
        },
      ],
    },
  ],
});
router.beforeEach((to) => {
  document.title = to.name;
});

export default router;
