import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "Add",
    component: () => import(/* webpackChunkName: "about" */ "../views/Add.vue"),
  },
  // {
  //   path: "/remove",
  //   name: "Remove",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Remove.vue"),
  // },
  // {
  //   path: "/update",
  //   name: "Update",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Update.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
