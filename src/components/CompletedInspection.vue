<template>
    <ion-accordion-group>
        <ion-accordion v-for="inspection in inspections">
            <ion-item slot="header" color="light">
                <ion-icon name="home" src="/icons/home.svg"></ion-icon>
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
                            <!-- <p>{{ new Intl.DateTimeFormat('nl-NL').format(new Date(inspection.surveyOfDamage.date)) }}</p> -->

                        </div>
                        <div>
                            <h3>Inspectie ID</h3>
                            <p>{{ inspection.id }}</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Schade opnemen</h2>
                    <ion-list>
                        <ion-item>
                            <ion-label>Locatie:<p>{{ inspection.surveyOfDamage.location }}</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Nieuwe schade:<p>{{ inspection.surveyOfDamage.newDamage }}</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Soort schade:<P>{{ inspection.surveyOfDamage.typeOfDamage }}</P></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Datum:<p>

                                    {{ new Intl.DateTimeFormat('nl-NL').format(inspection.surveyOfDamage.date) }}</p>
                            </ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Acute actie vereist:<p>{{ inspection.surveyOfDamage.requiredAction }}</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Omschrijving:<p>{{ inspection.surveyOfDamage.description }}</p></ion-label>
                        </ion-item>
                    </ion-list>
                </section>
                <section>
                    <h2>Achterstallig onderhoud opnemen:</h2>
                    <ion-list>
                        <ion-item>
                            <ion-label>Locatie:<p>{{ inspection.maintenance.location }}</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Soort onderhoud:<P>{{ inspection.maintenance.typeOfMaintenance }}</P></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Acute actie vereist:<p> {{ inspection.maintenance.requiredAction }}</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Kostenindicatie:<p>{{ inspection.maintenance.estimatedCost }}</p></ion-label>
                        </ion-item>
                    </ion-list>
                </section>
                <section>
                    <h2>Technische installaties inspecteren:</h2>
                    <ion-list>
                        <ion-item>
                            <ion-label>Locatie:<p>{{ inspection.technicalInstallation.location }}</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Soort installatie:<p>{{ inspection.technicalInstallation.typeOfInstallation }}</p>
                            </ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Gemelde storingen:<p>{{ inspection.technicalInstallation.reportedFailures }}</p>
                            </ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Goedgekeurd<p>{{ inspection.technicalInstallation.approved }}</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Opmerkingen<p>{{ inspection.technicalInstallation.comments }}</p></ion-label>
                        </ion-item>
                    </ion-list>
                </section>
                <section>
                    <h2>Modificaties inventariseren:</h2>
                    <ion-list>
                        <ion-item>
                            <ion-label>Locatie aangetroffen modificatie:<p>{{ inspection.modification.location }}</p>
                            </ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Uitgevoerd door:<p>{{ inspection.modification.carriedOutBy }}</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Beschrijving modificatie:<p>{{ inspection.modification.description }}</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Te ondernemen actie<p>{{ inspection.modification.actionToTake }}</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Opmerkingen<p>{{ inspection.modification.comments }}</p></ion-label>
                        </ion-item>
                    </ion-list>
                </section>
                <router-link :to="'activeInspection/' + inspection.id"><ion-button>Inspectie
                        bewerken</ion-button></router-link>
            </div>
        </ion-accordion>
    </ion-accordion-group>
</template>

<script>
import { IonAccordionGroup, IonAccordion, IonItem, IonIcon, IonLabel, IonList } from '@ionic/vue';
import { defineComponent } from 'vue';
import EventService from '../services/EventService';
import { Inspection } from '../models/inspection';

export default defineComponent({
    name: 'CompletedInspection',
    components: { IonAccordionGroup, IonAccordion, IonItem, IonIcon, IonLabel, IonList },
    data() {
        return {
            inspections: [],

        }
    },
    created() {
        this.fetchData();

    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            EventService.getPage('/inspections')
                .then(response => {
                    const data = response.data;
                    this.inspections = data.record.inspections.filter(inspection => inspection.completed === 'inspectie afgerond').map(inspection => new Inspection(inspection))
                }).catch(error => {
                    console.log(error)
                })
        }
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

