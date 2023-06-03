<template>
    <ion-toolbar>
        <router-link to="/dashboard" slot="start">
            <img src="../theme/images/logo-wit.svg">
        </router-link>
        <ion-title>Real Estate Care</ion-title>
        <router-link to="/" slot="end">
            <ion-icon  src="../public/icons/log-out-outline.svg"></ion-icon>
        </router-link>
    </ion-toolbar>
</template>

<script>

export default {
    name: 'Toolbar',
}
</script>

<style scoped>
    ion-icon {
        font-size: 48px;
        color: white;
    }
    ion-toolbar {
        padding-inline: 1rem;  
        height: 70px; 
        display: inline-flex;
        align-items: center; 
    }
    img {
        width: 48px;
    }
    ion-title {
        font-size: 22px;
        text-align: center;
    }
</style>

