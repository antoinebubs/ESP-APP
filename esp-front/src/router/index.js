import { createRouter, createWebHashHistory } from "vue-router";
import MainPage from "../views/MainPage.vue";
import NewsView from "../views/NewsView.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import SignIn from "@/views/SignIn.vue";
import TestParallax from "@/views/TestParallax.vue"

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: MainPage,
  },
  {
    path: "/news",
    name: "news",
    component: NewsView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/copyright",
    name: "copyright",
    component: TestParallax,
  },
  {
    path: "/about",
    name: "about",

    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
