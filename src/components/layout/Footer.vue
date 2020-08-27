<template>
    <div id="Footer">
        <p>Copyright © 2020 Paiztek, Todos los derechos reservados.</p>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

    #Footer {
        text-align: center;
        background: #0e1726;
        color:#fff;
        height:100%;
    }

    p {
        height: 30px;
    }

    @media (max-width: 768px) {
        #Footer p {
            font-size: 14px;
        }
    }
</style>
