<template>
    <ion-toast trigger="open-toast" :message=randomNumber position="top" :duration="5000"></ion-toast>
    <ion-card class="login-card">
        <img src="../theme/images/logo-tekst1.png">
        <ion-card-header>
        </ion-card-header>
        <ion-card-content>
            <form>
                <ion-item>
                    <ion-label>Code:</ion-label>
                    <input class="login-input" type="number" id="authenticate" v-model="authenticate" required>
                </ion-item>
                <ion-item lines="none">
                    <ion-button slot="start" size="default" @click="createRandomNumber" id="open-toast">Verificatiecode
                    </ion-button>
                    <ion-button slot="end" size="default" @click="submit">Inloggen
                        <ion-icon slot="start" src="../src/theme/icons/log-in-outline.svg"></ion-icon>
                    </ion-button>
                </ion-item>
            </form>
        </ion-card-content>
    </ion-card>
    <ion-item lines="none" id="error" v-if="error">
                <p>Verificatiecode is fout!</p>
            </ion-item>
</template>

<script>
import '../theme/main.css';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonIcon, IonToast } from '@ionic/vue';

export default {
    name: 'Authentication',
    components: { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonIcon, IonToast },
    data() {
        return {
            error: false,
            randomNumber: 0,
        }
    },
    methods: {
        submit() {
            if (this.authenticate == this.randomNumber) {
                console.log('hallo', this.authenticate);
                this.$router.push('dashboard');
            }
            else {
                this.error = true;
            }
        },
        createRandomNumber() {
            this.randomNumber = Math.floor(Math.random() * (100000 - 1000000) + 1000000);
            console.log(this.randomNumber);
        }
    },
}
</script>

<style scoped>

ion-button:first-child {
    --background: var(--ion-color-secondary);
}

#error {
    --background: red;
    color: white;
    border-radius: 8px;
    max-width: 455px;
    margin-block-start: 2rem;
    margin-inline: auto;
}
.login-input {
    margin-block: 10px;
    border: 1px solid black;
    border-radius: 4px;
}

.login-card {
    max-width: 455px;
    margin: auto;
    padding-block: 2rem;
}
</style>