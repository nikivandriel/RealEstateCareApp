<template>
    <form>
        <ion-card>
            <ion-card-title>
                <ion-label>Schade opnemen</ion-label>
            </ion-card-title>
            <ion-card-content>
                <ion-item>
                    <ion-input aria-label="locatie" label="Locatie:" type="text" fill="outline"
                        placeholder="Waar is de schade aangetroffen?" value=""></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label slot="start">Nieuwe schade:</ion-label>
                    <ion-radio-group value="">
                        <ion-radio value="ja">Ja</ion-radio>
                        <ion-radio value="nee">Nee</ion-radio>
                    </ion-radio-group>
                </ion-item>
                <ion-item>
                    <ion-select label="Soort schade:" aria-label="selecteer soort schade" placeholder="selecteer">
                        <ion-select-option value="moedwillig">Moedwillig</ion-select-option>
                        <ion-select-option value="slijtage">Slijtage</ion-select-option>
                        <ion-select-option value="geweld">Geweld</ion-select-option>
                        <ion-select-option value="normaal gebruik">Normaal gebruik</ion-select-option>
                        <ion-select-option value="calamiteit">Calamiteit</ion-select-option>
                        <ion-select-option value="anders">Anders</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label>Datum:</ion-label>
                    <input type="date">
                </ion-item>
                <ion-item>
                    <ion-radio-group value="">
                        <ion-label>Acute actie vereist:</ion-label>
                        <ion-radio value="ja">Ja</ion-radio><br />
                        <ion-radio value="nee">Nee</ion-radio><br />
                    </ion-radio-group>
                </ion-item>
                <ion-item>
                    <ion-label>Omschrijving:</ion-label>
                    <textarea aria-label="omschrijving" label="Omschrijving:" placeholder="" value=""></textarea>
                </ion-item>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-title>
                <ion-label>Achterstallig onderhoud</ion-label>
            </ion-card-title>
            <ion-card-content>
                <ion-item>
                    <ion-input aria-label="locatie" label="Locatie:" type="text" fill="outline"
                        placeholder="Waar moet het onderhoud plaatsvinden?" value=""></ion-input>
                </ion-item>
                <ion-item>
                    <ion-select aria-label="soort onderhoud" label="Soort onderhoud:" placeholder="Selecteer">
                        <ion-select-option value="schilderwerk">Schilderwerk</ion-select-option>
                        <ion-select-option value="houtrot">Houtrot</ion-select-option>
                        <ion-select-option value="elektra">Elektra</ion-select-option>
                        <ion-select-option value="leidingwerk">Leidingwerk</ion-select-option>
                        <ion-select-option value="beglazing">Beglazing</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>

                    <ion-radio-group value="">
                        <ion-label>Acute actie vereist:</ion-label>
                        <ion-radio value="ja">Ja</ion-radio><br />
                        <ion-radio value="nee">Nee</ion-radio><br />
                    </ion-radio-group>
                </ion-item>
                <ion-item>
                    <ion-select aria-label="kosten indicatie" label="Kosten indicatie:" placeholder="Selecteer">
                        <ion-select-option value="0-500">0-500</ion-select-option>
                        <ion-select-option value="500-1500">500-1500</ion-select-option>
                        <ion-select-option value="1500 +">1500 +</ion-select-option>
                    </ion-select>
                </ion-item>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-title>
                <ion-label>Technische installaties inspecteren:</ion-label>
            </ion-card-title>
            <ion-card-content>
                <ion-item>
                    <ion-input label="Locatie" type="text" fill="outline" placeholder="Waar bevind de installatie zich?"
                        value=""></ion-input>
                </ion-item>
                <ion-item>
                    <ion-select label="Soort installatie" aria-label="Soort installatie" placeholder="Selecteer">
                        <ion-select-option value="koeling">Koeling</ion-select-option>
                        <ion-select-option value="verwarming">Verwarming</ion-select-option>
                        <ion-select-option value="luchtverversing">Luchtverversing</ion-select-option>
                        <ion-select-option value="elektra">Elektra</ion-select-option>
                        <ion-select-option value="beveiliging">Beveiliging</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-input label="Gemelde storing" type="text" fill="outline" placeholder="omschrijving van de storing"
                        value=""></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label><a href="#">link naar pdf-bestand</a></ion-label>
                </ion-item>
                <ion-item>
                    <ion-radio-group value="">
                        <ion-label>Goedgekeurd:</ion-label>
                        <ion-radio value="ja">Ja</ion-radio><br />
                        <ion-radio value="nee">Nee</ion-radio><br />
                    </ion-radio-group>
                </ion-item>
                <ion-item>
                    <ion-label>Opmerkingen:</ion-label>
                    <textarea aria-label="opmerkingen" placeholder="Vul hier overige informatie in" value=""></textarea>
                </ion-item>
            </ion-card-content>
        </ion-card>
        <ion-card>
            <ion-card-title>
                <ion-label>Modificaties inventariseren</ion-label><br />
            </ion-card-title>
            <ion-card-content>
                <ion-item>
                    <p>Bestaande situatie en reeds gedocumenteerde modificaties vind u hier</p>
                    <a href="#">link naar pdf-bestand</a>
                </ion-item>
                <ion-item>
                    <ion-input label="Locatie aangetroffen modificatie" type="text" fill="outline" placeholder=""
                        value=""></ion-input>
                </ion-item>
                <ion-item>
                    <ion-select label="Uitgevoerd door" aria-label="uitgevoerd door" placeholder="Selecteer">
                        <ion-select-option value="huurder">Huurder</ion-select-option>
                        <ion-select-option value="aannemer">Aannemer</ion-select-option>
                        <ion-select-option value="onbekend">Onbekend</ion-select-option>
                    </ion-select>
                </ion-item>
                <ion-item>
                    <ion-label>Beschrijving modifiactie:</ion-label>
                    <textarea aria-label="beschrijving" placeholder="Vul hier overige informatie in" value=""></textarea>
                </ion-item>
                <ion-item>
                    <ion-select aria-label="te ondernemen actie" label="Te ondernemen actie" placeholder="Selecteer">
                        <ion-select-option value="accepteren">accepteren</ion-select-option>
                        <ion-select-option value="laten keuren">laten keuren</ion-select-option>
                        <ion-select-option value="laten verwijderen">laten verwijderen</ion-select-option>
                        <ion-select-option value="laten aanpassen en keuren">laten aanpassen en keuren</ion-select-option>
                    </ion-select>
                </ion-item>
            </ion-card-content>
        </ion-card>
        <ion-button type="submit">Opslaan</ion-button>
    </form>
</template>

<script>
import { IonCard, IonCardTitle, IonCardContent, IonInput, IonLabel, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonDatetime, IonItem, IonButton } from '@ionic/vue';

export default {
    name: 'InspectionDetail',
    components: { IonCard, IonCardTitle, IonCardContent, IonInput, IonLabel, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonDatetime, IonItem, IonButton }
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
    --color-checked: #6815ec;
}

ion-radio::part(container) {
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
}
</style>