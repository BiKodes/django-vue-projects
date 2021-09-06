import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from './router/routes.js'
import store from './store/store.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import IdleVue from 'idle-vue'

const eventsHub = new Vue()

Vue.use(IdleVue, {
    eventEmitter: eventsHub,
    idleTime: 10000
})


VueRouter.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
        if (!store.getters.loggedIn){
            next({name: 'login'})
        }
        else {
            next()
        }
    } else {
        next()
    }
})


createApp(App).use(store).use(VueRouter).mount('#app')
