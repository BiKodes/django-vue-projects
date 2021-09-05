import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// import IdleVue from 'idle-vue'

// const eventsHub = new Vue()

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresLogin)){
        if (!store.getters.loggedin) {
            next({ name: 'Login' })
        } else {
            next()
        }
    } else {
        next()
    }
})

const app = createApp(App)

app.use(store)

// app.use(IdleVue, {
//     eventEmitter: eventsHub,
//     idleTime: 10000
// })

app.use(router).mount('#app')
