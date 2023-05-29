<template>
    <ion-page>
        <ion-header :translucent="true">
            <Toolbar></toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="ion-padding" id="container">
                <h3>Instellingen</h3>
                <p>Hier kunt u uw gegevens aanpassen en instellingen beheren.</p>
            </div>
            <div class="cards">
                <ion-card class="settings-card">
                    <ion-card-header>
                        <ion-card-title>Gegevens</ion-card-title>
                        <ion-avatar>
                            <img alt="foto van de werknemer" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                        </ion-avatar>
                    </ion-card-header>
                    <ion-card-content>
                        <form>
                            <ion-item>
                                <ion-label>Gebruikersnaam: </ion-label>
                                <input class="settings-input" type="text" id="username" value="Admin" disabled>
                            </ion-item>
                            <ion-item>
                                <ion-label>E-mailadres: </ion-label>
                                <input class="settings-input" type="email" id="emailaddress" value="admin@realestatecare.nl"
                                    disabled>
                            </ion-item>
                            <ion-item>
                                <ion-label>Wachtwoord: </ion-label>
                                <input class="settings-input" type="password" id="password" value="Welkom123" disabled>
                            </ion-item>
                        </form>
                    </ion-card-content>
                </ion-card>
                <ion-card class="settings-card">
                    <ion-card-header>
                        <ion-card-title>Instellingen</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        <form>
                            <ion-item>
                                <ion-toggle :checked="true">Dark modus: </ion-toggle>
                            </ion-item>
                            <ion-item>
                                <ion-toggle :checked="false">Meldingen tonen: </ion-toggle>
                            </ion-item>
                            <ion-item>
                                <ion-toggle :checked="false">Geluid aan/ uit: </ion-toggle>
                            </ion-item>
                        </form>
                    </ion-card-content>
                </ion-card>
            </div>
            <router-link to="/">
                <ion-button size="default" @click="submit">Uitloggen
                    <ion-icon slot="end" src="../src/theme/icons/log-out-outline.svg"></ion-icon>
                </ion-button>
            </router-link>
        </ion-content>

        <ion-footer>
            <Navigation></Navigation>
        </ion-footer>
    </ion-page>
</template>

<script>
import Toolbar from '../components/Toolbar.vue';
import Navigation from '../components/Navigation.vue';
import { IonPage, IonHeader, IonAvatar, IonContent, IonFooter, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonItem, IonLabel, IonButton, IonToggle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Settings',
    components: { Navigation, Toolbar, IonPage, IonHeader, IonAvatar, IonContent, IonFooter, IonCard, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonButton, IonIcon, IonToggle },
});

</script>

<style scoped>
ion-avatar {
    margin: auto;
}
.cards {
    display: flex;
    flex-flow: wrap; 
    justify-content: space-evenly;
}
.settings-input {
    margin-block: 10px;
    border: 1px solid black;
    border-radius: 4px;
}

.settings-card {
    max-width: 455px;
    width: 100%;
    height: 275px;
}

.settings-card:first-child {
    margin-block-end: 1rem;
}
</style>