<template>
    <div id="Header">
        <div id="header">
            <div id="header-logo">
                <router-link to="/" class="route" id="logo-button">
                    <span>AllTracker24</span>
                </router-link>
            </div>
            <div id="header-user">
                <router-link to="/userinfo" class="route" id="user-button">
                        <span id="act-datos">Actualizar Datos</span>
                        <i class="fas fa-user" id="header-user-btn"></i>
                </router-link>
                
                <i class="fas fa-power-off"></i>
            </div>
        </div>
        <div id="navbar">
            <div>
                <span>{{ currentRouteName }}</span>
            </div>
            <div>
                <!-- <span>Settings</span> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }
}
</script>

<style scoped>

    #header {
        background: #0e1726;
        color: #e0e6ed;
        font-size: 25px;
    }

    #navbar {
        background: #fafafa;
        color: #888ea8;
    }

    #header, #navbar {
        padding: 16px;
        display:grid;
        grid-template-columns: 1fr 1fr;
    }

    #header-user {
        justify-self: end;
    }

    #header-user span {
        font-size: 20px;
        margin-right: 5px;
    }

    #header-user i {
        margin: 0 5px;
    }

    #user-button, #logo-button {
        color: #e0e6ed;
    }

    @media (max-width: 768px) {
        #act-datos {
            display: none;
        }
    }

</style>