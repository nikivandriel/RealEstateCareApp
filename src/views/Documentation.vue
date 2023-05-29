<template>
    <ion-page>
        <ion-header :translucent="true">
            <Toolbar></toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="ion-padding" id="container">
                <h3>Kennisbank</h3>
                <p>Hieronder vind u de kennisdocumenten.</p>
            </div>
            <ion-accordion-group>
                <ion-accordion v-for="document in documentationData.documents">
                    <ion-item slot="header" color="light">
                        <ion-icon :src="getImageUrl(document.svg)"></ion-icon>
                        <ion-label>{{ document.title }}</ion-label>
                    </ion-item>
                    <div class="ion-padding" slot="content">{{ document.content }}</div>
                </ion-accordion>
            </ion-accordion-group>
        </ion-content>

        <ion-footer>
            <Navigation></Navigation>
        </ion-footer>
    </ion-page>
</template>

<script>
import Toolbar from '../components/Toolbar.vue';
import Navigation from '../components/Navigation.vue';
import documentationData from '@/data/documentationData';
import mixins from '@/mixins/mixins';
import { IonContent, IonHeader, IonPage, IonFooter, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonIcon } from '@ionic/vue';

export default {
    name: 'QuickAction',
    components: { Navigation, Toolbar, IonContent, IonHeader, IonPage, IonFooter, IonAccordionGroup, IonAccordion, IonItem, IonLabel, IonIcon },
    props: {
    },
    setup() {
        return {
        }
    },
    data() {
        return {
            documentationData
        }
    },
    mixins: [mixins],
};
</script>

<style>
    ion-icon {
        padding-inline-end: 1rem;
    }
</style>