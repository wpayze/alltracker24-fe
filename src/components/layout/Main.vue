<template>
    <div id="Main">
        <transition name="fade" mode="out-in"> 
            <router-view :user = "user" />
        </transition>
    </div>
</template>

<script>
export default {
    props: ["user"]
}
</script>

<style scoped>
    #Main {
        padding: 1em;
    }

    .fade-enter-active,
    .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
    opacity: 0
    }
</style>
