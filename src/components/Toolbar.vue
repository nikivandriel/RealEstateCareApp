<template>
    <ion-toolbar>
        <img slot="start" src="../theme/images/logo-wit.svg">
        <ion-title>Real Estate Care</ion-title>
        <ion-icon slot="end" src="../src/theme/icons/log-out-outline.svg"></ion-icon>
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

