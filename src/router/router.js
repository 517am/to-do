import Registration from '../pages/Registration.vue'
import Main from '../pages/Main.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/reg',
        component: Registration
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;