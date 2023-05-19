<template>
    <ion-page>
        <ion-header :translucent="true">
            <Toolbar></toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="ion-padding" id="container">
                <h3>Uitgevoerde rapportages</h3>
                <p>Hieronder vind u het overzicht met afgeronde inspecties. Klik op het adres om de gegevens te bekijken of te bewerken</p>
                <CompletedInspection></CompletedInspection>
            </div>
        </ion-content>

        <ion-footer>
            <Navigation></Navigation>
        </ion-footer>
    </ion-page>
</template>

<script setup>
import Toolbar from '../components/Toolbar.vue';
import Navigation from '../components/Navigation.vue';
import CompletedInspection from '../components/CompletedInspection.vue';
import { IonContent, IonHeader, IonPage, IonFooter } from '@ionic/vue';

</script>

<style>

</style>