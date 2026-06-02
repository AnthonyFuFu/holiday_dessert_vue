import { createRouter, createWebHistory } from 'vue-router'
import MemberLayout from '@/layouts/MemberLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import ROUTE_URL from '@/constants/routes-url';

const routes = [
    {
        path: ROUTE_URL.HOME,
        component: MainLayout,
        children: [{
                path: '',
                redirect: ROUTE_URL.INDEX,
                pathMatch: 'full'
            },
            {
                path: ROUTE_URL.INDEX,
                name: 'index',
                component: () =>
                    import ('@/views/IndexView.vue')
            }
        ]
    },
    {
        path: ROUTE_URL.HOME + ROUTE_URL.MEMBER,
        component: MemberLayout,
        children: [{
                path: '',
                redirect: ROUTE_URL.MEMBER + '/' + ROUTE_URL.LOGIN
            },
            {
                path: ROUTE_URL.LOGIN,
                name: 'login',
                component: () =>
                    import ('@/views/member/Login.vue')
            },
            {
                path: ROUTE_URL.REGISTER,
                name: 'register',
                component: () =>
                    import ('@/views/member/Register.vue')
            },
            {
                path: ROUTE_URL.VERIFICATION,
                name: 'verification',
                component: () =>
                    import ('@/views/member/Verification.vue')
            },
            {
                path: ROUTE_URL.VERIFICATION_SUCCESS,
                name: 'verificationSuccess',
                component: () =>
                    import ('@/views/member/VerificationSuccess.vue')
            }
        ]
    }
]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory('/holidayDessert'),
    routes
})

export default router