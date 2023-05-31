<template>
    <form>
        <ion-accordion-group class="accordion-group">
            <ion-accordion v-if="inspection.surveyOfDamage">
                <ion-item slot="header" color="light">
                    <ion-label>Schade opnemen</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                    <ion-item lines="none">
                        <label aria-label="locatie van de schade:">Locatie van de schade:</label>
                        <ion-input class="text-input" type="text" fill="outline"
                            placeholder="Waar is de schade aangetroffen?"
                            v-model="inspection.surveyOfDamage.location"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-toggle aria-label="nieuwe schade:" v-model="inspection.surveyOfDamage.newDamage"
                            :checked="inspection.surveyOfDamage.newDamage" @ionChange="submit">Nieuwe
                            schade:</ion-toggle>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-select label="Soort schade:" aria-label="selecteer soort schade" placeholder="selecteer"
                            v-model="inspection.surveyOfDamage.typeOfDamage">
                            <ion-select-option value="moedwillig">Moedwillig</ion-select-option>
                            <ion-select-option value="slijtage">Slijtage</ion-select-option>
                            <ion-select-option value="geweld">Geweld</ion-select-option>
                            <ion-select-option value="normaal gebruik">Normaal gebruik</ion-select-option>
                            <ion-select-option value="calamiteit">Calamiteit</ion-select-option>
                            <ion-select-option value="anders">Anders</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label>Datum:</ion-label>
                        <ion-datetime-button datetime="datetime">
                            <p slot="time-target" class="ion-hide"></p>
                        </ion-datetime-button>
                        <ion-modal :keep-contents-mounted="true">
                            <ion-datetime v-model="inspection.surveyOfDamage.date" id="datetime">
                                <p slot="time-target"></p>
                            </ion-datetime>
                        </ion-modal>
                    </ion-item>

                    <ion-item lines="none">
                        <ion-toggle aria-label="accute actie vereist"
                            v-model="inspection.surveyOfDamage.requiredAction">Acute actie vereist:</ion-toggle>
                    </ion-item>
                    <ion-item lines="none">
                        <label aria-label="omschrijving van de schade:">Omschrijving van de schade:</label>
                        <ion-input class="text-input" type="text" fill="outline" placeholder="Omschrijving van de schade?"
                            v-model="inspection.surveyOfDamage.description"></ion-input>
                    </ion-item>
                </div>
            </ion-accordion>

            <ion-accordion v-if="inspection.maintenance">
                <ion-item slot="header" color="light">
                    <ion-label>Achterstallig onderhoud</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                    <ion-item lines="none">
                        <label aria-label="locatie">Locatie:</label>
                        <ion-input class="text-input" type="text" fill="outline"
                            placeholder="Waar moet het onderhoud plaatsvinden?"
                            v-model="inspection.maintenance.location"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-select aria-label="soort onderhoud" label="Soort onderhoud:" placeholder="Selecteer"
                            v-model="inspection.maintenance.typeOfMaintenance">
                            <ion-select-option value="schilderwerk">Schilderwerk</ion-select-option>
                            <ion-select-option value="houtrot">Houtrot</ion-select-option>
                            <ion-select-option value="elektra">Elektra</ion-select-option>
                            <ion-select-option value="leidingwerk">Leidingwerk</ion-select-option>
                            <ion-select-option value="beglazing">Beglazing</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-toggle aria-label="accute actie vereist" v-model="inspection.maintenance.requiredAction">Accute
                            actie vereist:</ion-toggle>
                    </ion-item>
                    <ion-item>
                        <ion-select aria-label="kosten indicatie" label="Kosten indicatie:" placeholder="Selecteer"
                            v-model="inspection.maintenance.estimatedCost">
                            <ion-select-option value="0-500">0-500</ion-select-option>
                            <ion-select-option value="500-1500">500-1500</ion-select-option>
                            <ion-select-option value="1500 +">1500 +</ion-select-option>
                        </ion-select>
                    </ion-item>
                </div>
            </ion-accordion>

            <ion-accordion v-if="inspection.maintenance">
                <ion-item slot="header" color="light">
                    <ion-label>Technische installaties inspecteren</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                    <ion-item lines="none">
                        <label aria-label="locatie">Locatie:</label>
                        <ion-input class="text-input" type="text" fill="outline"
                            placeholder="Waar bevind de installatie zich?"
                            v-model="inspection.technicalInstallation.location"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-select label="Soort installatie" aria-label="Soort installatie" placeholder="Selecteer"
                            v-model="inspection.technicalInstallation.typeOfInstallation">
                            <ion-select-option value="koeling">Koeling</ion-select-option>
                            <ion-select-option value="verwarming">Verwarming</ion-select-option>
                            <ion-select-option value="luchtverversing">Luchtverversing</ion-select-option>
                            <ion-select-option value="elektra">Elektra</ion-select-option>
                            <ion-select-option value="beveiliging">Beveiliging</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item lines="none">
                        <label aria-label="gemelde storing">Gemelde storing:</label>
                        <ion-input class="text-input" type="text" fill="outline" placeholder="omschrijving van de storing"
                            v-model="inspection.technicalInstallation.reportedFailures"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <router-link to="/documentation" class="router-link-button">
                            <ion-button class="button" size="default">
                                <ion-icon src="../src/theme/icons/document-text-outline.svg" slot="end"></ion-icon>
                                Testprocedure
                            </ion-button>
                        </router-link>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-toggle aria-label="goedgekeurd"
                            v-model="inspection.technicalInstallation.approved">Goedgekeurd:</ion-toggle>
                    </ion-item>
                    <ion-item lines="none">
                        <label aria-label="opmerkingen">Opmerkingen:</label>
                        <ion-input class="text-input" type="text" fill="outline"
                            placeholder="Vul hier overige informatie in"
                            v-model="inspection.technicalInstallation.description"></ion-input>
                    </ion-item>
                </div>
            </ion-accordion>

            <ion-accordion v-if="inspection.modification">
                <ion-item slot="header" color="light">
                    <ion-label>Modificaties inventariseren</ion-label>
                </ion-item>
                <div class="ion-padding" slot="content">
                    <ion-item lines="none">
                        <router-link to="/documentation" class="router-link-button">
                            <ion-button class="button" size="default">
                                <ion-icon src="../src/theme/icons/document-text-outline.svg" slot="end"></ion-icon>
                                Bestaande modificaties
                            </ion-button>
                        </router-link>
                    </ion-item>
                    <ion-item lines="none">
                        <label aria-label="locatie">Locatie:</label>
                        <ion-input class="text-input" type="text" fill="outline"
                            placeholder="Waar bevind de modificatie zich?"
                            v-model="inspection.modification.location"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-select label="Uitgevoerd door" aria-label="uitgevoerd door" placeholder="Selecteer"
                            v-model="inspection.modification.carriedOutBy">
                            <ion-select-option value="huurder">Huurder</ion-select-option>
                            <ion-select-option value="aannemer">Aannemer</ion-select-option>
                            <ion-select-option value="onbekend">Onbekend</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item lines="none">
                        <label aria-label="beschrijving modificatie">Beschrijving modifiactie:</label>
                        <ion-input class="text-input" type="text" fill="outline"
                            placeholder="Vul hier overige informatie in"
                            v-model="inspection.modification.description"></ion-input>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-select aria-label="te ondernemen actie" label="Te ondernemen actie" placeholder="Selecteer"
                            v-model="inspection.modification.actionToTake">
                            <ion-select-option value="accepteren">accepteren</ion-select-option>
                            <ion-select-option value="laten keuren">laten keuren</ion-select-option>
                            <ion-select-option value="laten verwijderen">laten verwijderen</ion-select-option>
                            <ion-select-option value="laten aanpassen en keuren">laten aanpassen en
                                keuren</ion-select-option>
                        </ion-select>
                    </ion-item>
                    <ion-item lines="none">
                        <label aria-label="opmerkingen">Opmerkingen:</label>
                        <ion-input class="text-input" type="text" fill="outline"
                            placeholder="Vul hier overige informatie in"
                            v-model="inspection.modification.comments"></ion-input>
                    </ion-item>
                </div>
            </ion-accordion>
        </ion-accordion-group>
        <ion-item>
            <ion-button size="default" @click="submit">Opslaan</ion-button>
        </ion-item>
    </form>
</template>

<script>
import { IonCard, IonCardTitle, IonCardContent, IonInput, IonLabel, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonButton } from '@ionic/vue';
import EventService from '../services/EventService';

export default {
    name: 'InspectionDetail',
    components: { IonCard, IonCardTitle, IonCardContent, IonInput, IonLabel, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonButton },
    props: {
        inspection: {},
    },
    methods: {

        submit(event) {
            console.log('toggle change')
            EventService.putPage(`/inspections/${this.inspection.id}`, { ...this.inspection })
        },
        onChange(event) {
            console.log('toggle change')
        }
    },
    created() {
        console.log(this.inspection)
    },
    watch: {
        'inspection': {
            deep: true,
            handler() {

            }
        }
    }
}
</script>

<style>
ion-radio-group {
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
}

ion-radio {
    --border-radius: 4px;
    --inner-border-radius: 4px;
    --color: #ddd;
    --color-checked: var(--ion-color-secondary);
}

ion-radio::part(container) {
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
}

.input-wrapper {
    --padding-start: 1rem;
}

.accordion-group {
    max-width: 600px;
    margin: auto;
}

.router-link-button {
    width: 100%;
}

.button {
    width: 100%;
    margin-block: 1rem;
}
</style>