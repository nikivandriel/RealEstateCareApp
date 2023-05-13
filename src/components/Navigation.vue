<template>
    <ion-toolbar>
        <a href="#" class="navigation-link" slot="start">
            <ion-icon src="../src/theme/icons/settings-outline.svg"></ion-icon>
            instellingen
        </a>
        <ion-title>
            <a href="#" class="navigation-link">
                <ion-icon src="../src/theme/icons/information-circle-outline.svg"></ion-icon>
                informatie
            </a>
        </ion-title>
        <a href="#" class="navigation-link" slot="end">
            <ion-icon src="../src/theme/icons/menu-outline.svg"></ion-icon>
            meer
        </a>
    </ion-toolbar>
</template>

<script>
import { IonToolbar, IonButton } from '@ionic/vue';
export default {
    name: 'Navigation',
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
    }
</style>

