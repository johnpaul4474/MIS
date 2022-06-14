import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

const routes = [
    {
        path: "/home",
        name: "home",
        component: () => import(/* webpackPrefetch: true */ "./components/ExampleComponent"),
    }

   
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;