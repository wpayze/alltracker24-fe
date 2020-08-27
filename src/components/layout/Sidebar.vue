<template>
    <div id="Sidebar">
        <ul id="sidebar-ul">
            <router-link to="/" class="route sidebar-opt">
                <li class="sidebar-li">
                    <i class="fas fa-home"></i>Inicio
                </li>
            </router-link>
            <router-link to="/dashboard" class="route sidebar-opt">
                <li class="sidebar-li">
                    <i class="fas fa-tachometer-alt"></i>Panel Central
                </li>
            </router-link>
            <router-link to="/parcels" class="route sidebar-opt">
                <li class="sidebar-li">
                    <i class="fas fa-box-open"></i>Paquetes
                </li>
            </router-link>
            <router-link to="/users" class="route sidebar-opt" v-if=" user.type == 'company' ">
                <li class="sidebar-li">
                <i class="fas fa-users"></i>Usuarios
                </li>
            </router-link>
            <router-link to="/userinfo" class="route sidebar-opt">
                <li class="sidebar-li">
                <i class="fas fa-user"></i>Perfil de Usuario
                </li>
            </router-link>
            <router-link to="/configs" class="route sidebar-opt">
                <li class="sidebar-li">
                <i class="fas fa-cog"></i>Configuraci&oacute;n
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    props: ["user"]
}
</script>

<style scoped>
    #Sidebar {
        padding: 1em;
    }

    #sidebar-ul {
        list-style-type: none;
        padding:0;
        font-size:17px;
    }

    .sidebar-li {
        width: 90%;
        margin: 10px 0;
        padding: 10px;
        border-radius: 10px;
    }

    .router-link-exact-active li {
        background: #c2ccd6;
    }

    .sidebar-li i{
        margin-right: 10px;
    }

    .sidebar-opt{
        color:#0e1726;
    }

    .sidebar-li:hover{
        background: #bfc9d4;
    }
</style>
