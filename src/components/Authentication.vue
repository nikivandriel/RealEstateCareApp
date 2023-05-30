<template>
    <ion-toast trigger="open-toast" :message= this.randomNumber position="top" :duration="5000"></ion-toast>
    <ion-card class="login-card">
        <img src="../theme/images/logo-tekst1.png">
        <ion-card-header>
        </ion-card-header>
        <ion-card-content>
            <ion-item id="error" v-if="error">
                <p>Authenticatie code is fout</p>
            </ion-item>
            <form>
                <ion-item>
                    <ion-label>Authenticatie code:</ion-label>
                    <input class="login-input" type="number" id="authenticate" v-model="authenticate" required>
                </ion-item>
                <ion-item>
                    <ion-button size="default" @click="createRandomNumber" id="open-toast">Verificatiecode
                    </ion-button>
                    <ion-button slot="end" size="default" @click="submit">Inloggen
                        <ion-icon slot="start" src="../src/theme/icons/log-in-outline.svg"></ion-icon>
                    </ion-button>
                </ion-item>
            </form>
        </ion-card-content>
    </ion-card>
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
            randomNumber: '',
        }
    },
    methods: {
        submit() {
            if (this.authenticate == '123456789') {
                console.log('hallo', this.authenticate);
                this.$router.push('dashboard');
            }
            else {
                this.error = true;
            }
        },
        createRandomNumber() {
            const randomNumber = Math.floor(Math.random() * (100000 - 1000000) + 1000000);
            console.log(randomNumber);
        }
    },
}
</script>

<style scoped>
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