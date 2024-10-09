import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Collections",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/product.vue"),
  },
  {
    path: "/products/peace-hoodie",
    name: "peace-hoodie",
    component: () => import("../views/products-view/peace-hoodie.vue"),
  },
  {
    path: "/products/lequipe-jersey",
    name: "lequipe-jersey",
    component: () => import("../views/products-view/lequipe-jersey.vue"),
  },
  {
    path: "/products/lequipe-hoodie",
    name: "lequipe-hoodie",
    component: () => import("../views/products-view/lequipe-hoodie.vue"),
  },
  {
    path: "/products/jong-un-tee",
    name: "jong-un-tee",
    component: () => import("../views/products-view/jong-un-tee.vue"),
  },
  {
    path: "/products/jong-un-tee-zip",
    name: "jong-un-tee-zip",
    component: () => import("../views/products-view/jong-un-tee-zip.vue"),
  },
  {
    path: "/products/equipe-tee",
    name: "equipe-tee",
    component: () => import("../views/products-view/equipe-tee.vue"),
  },
  {
    path: "/products/bart-moto-tee",
    name: "bart-moto-tee",
    component: () => import("../views/products-view/bart-moto-tee.vue"),
  },
  {
    path: "/products/bart-moto-tee-white",
    name: "bart-moto-tee-white",
    component: () => import("../views/products-view/bart-moto-tee-white.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior() {
    //scroll will go to top when route to another router
    return { top: 0 };
  },
});

export default router;
