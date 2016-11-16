import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../components/index/Cont.vue'
import Recommend from '../components/index/Recommend.vue'

module.exports = new VueRouter({
    base: __dirname,
    routes: [
        { path: '/index', component: Index },
        { path: '/recommend', component: Recommend },
    ]
})