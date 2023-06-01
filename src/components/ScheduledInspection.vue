<template>
    <ion-accordion-group>
        <ion-accordion v-for="inspection in inspections" :key="inspection.id">
            <ion-item slot="header" color="light">
                <ion-icon name="home" src="../src/theme/icons/home.svg"></ion-icon>
                <ion-label>
                    <p>{{ inspection.address }}</p>
                    <p>{{ inspection.postalcode }} {{ inspection.city }}</p>
                </ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">
                <section>
                    <div class="header">
                        <div>
                            <h3>Datum</h3>
                            <p>{{ new Intl.DateTimeFormat('nl-NL').format(inspection.surveyOfDamage.date) }}</p>
                        </div>
                        <div>
                            <h3>Inspectie ID</h3>
                            <p>{{ inspection.id }}</p>
                        </div>
                    </div>
                </section>
                <section>
                    <ion-list lines="none">
                        <ion-item  disabled="true">
                            <ion-label>Schade opnemen</ion-label>
                        </ion-item>
                        <ion-item disabled="true">
                            <ion-label>Achterstallig onderhoud opnemen</ion-label>
                        </ion-item>
                        <ion-item disabled="true">
                            <ion-label>Technische installaties inspecteren</ion-label>
                        </ion-item>
                        <ion-item disabled="true">
                            <ion-label>Modificaties inventariseren</ion-label>
                        </ion-item>
                    </ion-list>
                    <router-link :to="'activeInspection/' + inspection.id"><ion-button>Inspectie invullen</ion-button></router-link>

                </section>
            </div>
        </ion-accordion>
    </ion-accordion-group>
</template>

<script>
import { IonAccordionGroup, IonAccordion, IonItem, IonIcon, IonLabel, IonList, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import EventService from '../services/EventService';
import { Inspection } from '../models/inspection';

export default defineComponent({
    name: 'CompletedInspection',
    components: { IonAccordionGroup, IonAccordion, IonItem, IonIcon, IonLabel, IonList, IonButton },
    data() {
        return {
            inspections: [],

        }
    },
    created() {
        EventService.getPage('/inspections')
            .then(response => {
                const data = response.data;
                this.inspections = data.record.inspections.filter(inspection => !inspection.completed).map(inspection => new Inspection(inspection))
            }).catch(error => {
                console.log(error)
            })
    },
    methods: {

    }
});
</script>

<style scoped>
    ion-icon {
        padding-inline-end: 1rem;
    }

    .header {
        display: inline-flex;
        justify-content: space-between;
        width: 100%;
    }
</style>

