import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../pages/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: home,
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../pages/about-us.vue'),
        meta: {
            title: 'About Us'
        }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import(/* webpackChunkName: "about" */ '../pages/projects.vue'),
        meta: {
            title: 'Projects'
        }
    },
    {
        path: '/expertise',
        name: 'Expertise',
        component: () => import(/* webpackChunkName: "about" */ '../pages/expertise.vue'),
        meta: {
            title: 'Expertise'
        }
    },
    {
        path: '/media',
        name: 'Media',
        component: () => import(/* webpackChunkName: "about" */ '../pages/media.vue'),
        meta: {
            title: 'Media'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "about" */ '../pages/contact.vue'),
        meta: {
            title: 'Contact'
        }
    },
    {
        path: '/csi/:id',
        name: 'CSI',
        component: () => import(/* webpackChunkName: "about" */ '../pages/csi.vue'),
        meta: {
            title: 'CSI'
        }
     }
    // ,
    // {
    //     path: '/csi/',
    //     name: 'CSI',
    //     component: () => import(/* webpackChunkName: "about" */ '../pages/csi.vue'),
    //     meta: {
    //         title: 'CSI'
    //     }
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior: () => {
        return {x: 0, y: 0, behavior: 'smooth'}
    }
})

export default router
