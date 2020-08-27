import Vue from 'vue'
import Router from 'vue-router'

import Index from './components/Index'
import UserInfo from './components/UserInfo'
import Parcels from './components/Parcels'
import Users from './components/Users'
import Dashboard from './components/Dashboard'
import UserConfigs from './components/UserConfigs'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Inicio",
            component: Index
        },
        {
            path: '/parcels',
            name: 'Paquetes',
            component: Parcels
        },
        {
            path: '/userinfo',
            name: 'Perfil de Usuario',
            component: UserInfo
        },
        {
            path: '/configs',
            name: 'Configuraciones de Empresa',
            component: UserConfigs
        },
        {
            path: '/users',
            name: 'Todos los Usuarios',
            component: Users
        },
        {
            path: '/dashboard',
            name: 'Panel Central',
            component: Dashboard
        }
    ]
})