<template>
    <ion-card class="login-card">
        <img src="../theme/images/logo-tekst1.png">
        <ion-card-header>
            </ion-card-header>
            <ion-card-content>
                <ion-item id="error" v-if="error">
                    <p>Wachtwoord of gebruikersnaam is fout</p>
                </ion-item>
                <form>
                    <ion-item>
                        <ion-label>E-mailadres: </ion-label>
                        <input class="login-input" type="email" id="username" v-model="username" required>
                    </ion-item>
                    <ion-item>
                        <ion-label>Wachtwoord: </ion-label>
                        <input class="login-input" type="password" id="password" v-model="password" required>
                    </ion-item>
                    <ion-item>
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
    import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/vue';

    export default {
        name: 'Login',
        components: { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonButton, IonIcon },
        
        data() {
            return {
                error: false,
            }
        },

        methods: {
            submit(){

                if(this.username == 'admin@realestatecare.nl' && this.password == 'Welkom123') {
                    console.log('hallo', this.username, this.password);
                    this.$router.push('authenticate');
                }
                else {
                    this.error = true;
                }
            }

        }
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