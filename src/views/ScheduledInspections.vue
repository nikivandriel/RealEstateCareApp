<template>
    <ion-page>
        <ion-header :translucent="true">
            <Toolbar></toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="ion-padding" id="container">
                <h3>De nog uit te voeren rapportages</h3>
                <p>Hieronder vind u het overzicht met de nog uit te voeren inspecties. Klik op het adres om de gegevens te bekijken of te bewerken</p>
            </div>
            <ScheduledInspection></ScheduledInspection>
        </ion-content>

        <ion-footer>
            <Navigation></Navigation>
        </ion-footer>
    </ion-page>
</template>

<script>
    import Toolbar from '../components/Toolbar.vue';
    import Navigation from '../components/Navigation.vue';
    import ScheduledInspection from '../components/ScheduledInspection.vue';
    import { IonContent, IonHeader, IonPage, IonFooter } from '@ionic/vue';

    export default {
        name: 'ScheduledInspections',
        components: { IonContent, IonHeader, IonPage, IonFooter, ScheduledInspection, Toolbar, Navigation }
    };

</script>

<style>

</style>