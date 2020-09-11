import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
    {
      path: "/",
      name: "about",
      component: About,
    },
  ],
});
