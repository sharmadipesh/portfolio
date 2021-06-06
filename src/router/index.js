import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landingpage",
    component: require("@/views/LandingPage").default,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
