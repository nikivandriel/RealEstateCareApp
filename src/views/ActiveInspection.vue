<template>
    <ion-page>
        <ion-header :translucent="true">
            <Toolbar></toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <section>
                <div class="ion-padding" id="container">
                    <h3>Inspectie</h3>
                    <p>inspectie adres: {{ id }}</p>
                    <p>inspectie id: {{ id }}</p>
                </div>
            </section>
            <InspectionDetail></InspectionDetail>
        </ion-content>

        <ion-footer>
            <Navigation></Navigation>
        </ion-footer>
    </ion-page>
</template>

<script>
    import Toolbar from '../components/Toolbar.vue';
    import Navigation from '../components/Navigation.vue';
    import { IonContent, IonHeader, IonPage, IonFooter } from '@ionic/vue';
    import InspectionDetail from '../components/InspectionDetail.vue';

    export default {
        name: 'activeInspection',
        components: {IonContent, IonHeader, IonPage, IonFooter, Toolbar, Navigation, InspectionDetail},
        created(){
            this.id = this.$route.params.id;
        },
    }


</script>

<style></style>