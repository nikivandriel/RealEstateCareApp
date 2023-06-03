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
                </div>
            </section>
            <InspectionDetail :inspections="inspections" :inspection="inspection"></InspectionDetail>
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
            inspections: [],
            inspection: {},
        }
    },    
    created() {
        this.id = +this.$route.params.id;

        EventService.getPage()
            .then(response => {
                const data = response.data;
                console.log(data);
                // const inspection = data.record.inspections.find(inspection => inspection.id === this.id);
                // console.log(inspection);
                this.inspections = data.record.inspections;
                this.inspection = this.inspections.find(inspection => inspection.id === this.id);
            }).catch(error => {
                console.log(error)
        })
    }
}


</script>

<style></style>