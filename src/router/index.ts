import Vue from "vue";
import VueRouter, { RawLocation, RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import LoginComponent from "@/components/Login.vue";
import {Route} from "vue-router/types/router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: LoginComponent
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});
// const originalPush = VueRouter.prototype.push;
// VueRouter.prototype.push = function push(location: RawLocation):Promise<Route> {
//   return originalPush.catch((err: any) => err);
// };
export default router;
