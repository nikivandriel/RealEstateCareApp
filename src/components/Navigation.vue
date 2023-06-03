<template>
    <ion-toolbar>
        <router-link to="/settings" class="navigation-link" slot="start">
            <ion-icon src="../public/icons/settings-outline.svg"></ion-icon>
            instellingen
        </router-link>
        <ion-title>
            <router-link to="/about" class="navigation-link">
                <ion-icon src="../public/icons/information-circle-outline.svg"></ion-icon>
                informatie
            </router-link>
        </ion-title>
        <router-link to="#" class="navigation-link" slot="end">
            <ion-icon src="../public/icons/menu-outline.svg"></ion-icon>
            meer
        </router-link>
    </ion-toolbar>
</template>

<script>
import { IonToolbar, IonTitle, IonIcon } from '@ionic/vue';
export default {
    name: 'Navigation',
    components: { IonToolbar, IonTitle, IonIcon }
}
</script>

<style scoped>
    ion-icon {
        font-size: 32px;
        color: white;
        padding-block-end: 4px;
    }
    ion-toolbar {
        --ion-toolbar-background: #293439; 
        padding-inline: 1rem; 
        height: 70px; 
        display: inline-flex;
        align-items: center;
    }
    ion-title {
        text-align: center;
    }
    ion-button {
        background-color: black;
        color: white;
    }
    .navigation-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        font-size: 16px;
        font-weight: 400;
        text-decoration: none;
    }
</style>

