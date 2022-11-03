import { lazy } from 'react';

export const routes = [
    {
        name: 'Home',
        route: '/',
        baseRoute: 'home',
        public: true,
        component: lazy(() => import('../../container'))
    },
    {
        name: 'Main',
        route: '/main',
        baseRoute: 'main',
        component: lazy(() => import('../../container/signUp')),
        children: [{
            name: 'Signup',
            route: 'signup',
            baseRoute: 'main',
            component: lazy(() => import('../../container/signUp/signup'))
        }, {
            name: 'Login',
            route: 'login',
            baseRoute: 'main',
            component: lazy(() => import('../../container/login'))
        }]
    }
]