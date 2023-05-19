<template>
    <form>
        <ion-label>Schade opnemen:</ion-label>
        <ion-input label="Locatie" type="text" fill="outline" placeholder="hier komt text" value="dit is de waarde"></ion-input>
        <ion-radio-group value="">
            <ion-label>Nieuwe schade:</ion-label>
            <ion-radio value="ja">Ja</ion-radio><br />
            <ion-radio value="nee">Nee</ion-radio><br />
        </ion-radio-group>

        <ion-select aria-label="fruit" placeholder="Soort schade">
            <ion-select-option value="moedwillig">Moedwillig</ion-select-option>
            <ion-select-option value="slijtage">Slijtage</ion-select-option>
            <ion-select-option value="geweld">Geweld</ion-select-option>
            <ion-select-option value="normaal gebruik">Normaal gebruik</ion-select-option>
            <ion-select-option value="calamiteit">Calamiteit</ion-select-option>
            <ion-select-option value="anders">Anders</ion-select-option>
        </ion-select>
        <ion-item>
            <ion-label>Datum:</ion-label>
            <ion-datetime presentation="date"></ion-datetime>
        </ion-item>
        <ion-radio-group value="">
            <ion-label>Acute actie vereist:</ion-label>
            <ion-radio value="ja">Ja</ion-radio><br />
            <ion-radio value="nee">Nee</ion-radio><br />
        </ion-radio-group>
        <ion-input label="Omschrijving:" type="text" placeholder="hier komt text" value="dit is de waarde"></ion-input>

        <ion-label>Achterstallig onderhoud</ion-label>
        <ion-input label="Locatie" type="text" fill="outline" placeholder="hier komt text" value="dit is de waarde"></ion-input>
        <ion-select aria-label="Soort onderhoud" placeholder="Soort onderhoud">
            <ion-select-option value="schilderwerk">Schilderwerk</ion-select-option>
            <ion-select-option value="houtrot">Houtrot</ion-select-option>
            <ion-select-option value="elektra">Elektra</ion-select-option>
            <ion-select-option value="leidingwerk">Leidingwerk</ion-select-option>
            <ion-select-option value="beglazing">Beglazing</ion-select-option>
        </ion-select>
        <ion-radio-group value="">
            <ion-label>Acute actie vereist:</ion-label>
            <ion-radio value="ja">Ja</ion-radio><br />
            <ion-radio value="nee">Nee</ion-radio><br />
        </ion-radio-group>
        <ion-label>Kosten indicatie</ion-label>
        <ion-select aria-label="kosten indicatie" placeholder="kosten indicatie">
            <ion-select-option value="0-500">0-500</ion-select-option>
            <ion-select-option value="500-1500">500-1500</ion-select-option>
            <ion-select-option value="1500 +">1500 +</ion-select-option>
        </ion-select>

        <ion-label>Technische installaties inspecteren:</ion-label>
        <ion-input label="Locatie" type="text" fill="outline" placeholder="hier komt text" value="dit is de waarde"></ion-input>
        <ion-select aria-label="Soort installatie" placeholder="Soort installatie">
            <ion-select-option value="koeling">Koeling</ion-select-option>
            <ion-select-option value="verwarming">Verwarming</ion-select-option>
            <ion-select-option value="luchtverversing">Luchtverversing</ion-select-option>
            <ion-select-option value="elektra">Elektra</ion-select-option>
            <ion-select-option value="beveiliging">Beveiliging</ion-select-option>
        </ion-select>
        <ion-input label="Gemelde storing" type="text" fill="outline" placeholder="hier komt text" value="dit is de waarde"></ion-input>
        <ion-label><a>link naar pdf-bestand</a></ion-label>
        <ion-radio-group value="">
            <ion-label>Goedgekeurd:</ion-label>
            <ion-radio value="ja">Ja</ion-radio><br />
            <ion-radio value="nee">Nee</ion-radio><br />
        </ion-radio-group>
        <ion-input label="Opmerkingen" type="text" fill="outline" placeholder="hier komt text" value="dit is de waarde"></ion-input>
        <ion-label>Modificaties inventariseren</ion-label><br/>
        <ion-label>Bestaande situatie en reeds gedocumenteerde modificaties<a>link naar pdf-bestand</a></ion-label>
        <ion-input label="Locatie aangetroffen modificatie" type="text" fill="outline" placeholder="hier komt text" value="dit is de waarde"></ion-input>
        <ion-select aria-label="uitgevoerd door" placeholder="Uitgevoerd door">
            <ion-select-option value="huurder">Huurder</ion-select-option>
            <ion-select-option value="aannemer">Aannemer</ion-select-option>
            <ion-select-option value="onbekend">Onbekend</ion-select-option>
        </ion-select>
        <ion-input label="Beschrijving modificatie" type="text" fill="outline" placeholder="hier komt text" value="dit is de waarde"></ion-input>
        <ion-select aria-label="te ondernemen actie" placeholder="Te ondernemen actie">
            <ion-select-option value="accepteren">accepteren</ion-select-option>
            <ion-select-option value="laten keuren">laten keuren</ion-select-option>
            <ion-select-option value="laten verwijderen">laten verwijderen</ion-select-option>
            <ion-select-option value="laten aanpassen en keuren">laten aanpassen en keuren</ion-select-option>
        </ion-select>
    </form>
</template>

<script>
import { IonInput } from '@ionic/vue';

export default {
    name: 'InspectionDetail',
}
</script>

<style></style>