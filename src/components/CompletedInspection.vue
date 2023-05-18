<template>
    <ion-accordion-group>
        <ion-accordion value="first"
            v-for="(inspection) in completedInspectionData.inspections"   
        >
            <ion-item slot="header" color="light">
                <ion-icon name="home" src="../src/theme/icons/home.svg"></ion-icon>
                <ion-label>
                    <p>Achterweg 34</p>
                    <p>2242 KR Wassenaar</p>
                </ion-label>
            </ion-item>
            <div class="ion-padding" slot="content">
                <section>
                    <div class="header">
                        <div>
                            <h3>Datum</h3>
                            <p>{{ inspection.surveyOfDamage.date }}</p>
                        </div>
                        <div>
                            <h3>Inspectie ID</h3>
                            <p>{{ inspection.id }}</p>
                        </div>
                    </div>
                </section>
                <section>
                    <ion-list>
                        <ion-item>
                            <ion-label>Mega Man X <p>Hallo</p></ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Mega Man X</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>The Legend of Zelda</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Pac-Man</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-label>Super Mario World</ion-label>
                        </ion-item>
                    </ion-list>
                </section>
            </div>
        </ion-accordion>
    </ion-accordion-group>
</template>

<script>
import { IonAccordionGroup, IonAccordion, IonItem, IonIcon, IonLabel, IonList } from '@ionic/vue'; 
import completedInspectionData from '@/data/completedInspectionData';
import { defineComponent } from 'vue';

export default defineComponent ({
    name: 'CompletedInspection',
    components: { IonAccordionGroup, IonAccordion, IonItem, IonIcon, IonLabel, IonList },
    data() {
        return {
            completedInspectionData
        }
    }
});
</script>

<style scoped></style>

