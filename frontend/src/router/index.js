import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Profile from '../components/Auth/Profile.vue';
import store from '../store';

Vue.use(Router);

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
        path: '/profile',
        component: Profile,
        beforeEnter: (to, from, next) => {
            if (!store.getters.isAuthenticated) {
                next('/login');
            } else {
                next();
            }
        },
    },
];

export default new Router({ mode: 'history', routes });
