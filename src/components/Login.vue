<template>
    <ion-card class="login-card">
            <img src="../theme/images/logo-tekst1.png">
            <ion-card-header>
                <ion-card-title class="card-title">Inloggen</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                <form>
                    <ion-item>
                        <ion-label>E-mailadres: </ion-label>
                        <input class="login-input" type="email" required>
                    </ion-item>
                    <ion-item>
                        <ion-label>Wachtwoord: </ion-label>
                        <input class="login-input" type="password" required>
                    </ion-item>
                    <ion-item>
                        <ion-button slot="end" expand="block" size="default" type="submit">Inloggen</ion-button>
                    </ion-item>
                </form>
            </ion-card-content>
        </ion-card>
</template>

<script>
    import '../theme/main.css';
    import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonButton } from '@ionic/vue';

    export default {
        name: 'Login',
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