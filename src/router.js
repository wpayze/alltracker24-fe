import Vue from 'vue'
import Router from 'vue-router'

import UserInfo from './components/UserInfo';
import Parcels from './components/Parcels';
import Users from './components/Users';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Inicio',
            component: Parcels
        },
        {
            path: '/userinfo',
            name: 'Perfil de Usuario',
            component: UserInfo
        },
        {
            path: '/users',
            name: 'Todos los Usuarios',
            component: Users
        }
    ]
})