import foo from "../components/foo.vue"
import bar from "../components/bar.vue"
import VueRouter from "vue-router"
// import Vue from 'vue'
// Vue.use(VueRouter)
export default new VueRouter({
    name:"router",
    routes: [
        {path:'/foo',component:foo},
        {path:'/bar',component:bar}
    ]
})