<template>
    <ion-page>
        <ion-header :translucent="true">
            <Toolbar></toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <section>
                <div class="ion-padding" id="container">
                    <h3>Inspectie</h3>
                    <p>inspectie adres: {{ this.inspection.address }}</p>
                    <p>inspectie id: {{ id }}</p>
                    {{this.inspection.city}}
                </div>
            </section>
            <InspectionDetail :inspection="inspection"></InspectionDetail>
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
import EventService from '../services/EventService';
import { Inspection } from '../models/inspection';

export default {
    name: 'activeInspection',
    components: { IonContent, IonHeader, IonPage, IonFooter, Toolbar, Navigation, InspectionDetail },
    data() {
        return {
            inspection: {},
        }
    },    
    created() {
        this.id = +this.$route.params.id;

        EventService.getPage('/inspections')
            .then(response => {
                const data = response.data;
                console.log(data);
                const inspection = data.find(inspection => inspection.id === this.id);
                console.log(inspection);
                this.inspection = new Inspection(data.find(inspection => inspection.id === this.id))
            }).catch(error => {
                console.log(error)
        })
    }
}


</script>

<style></style>