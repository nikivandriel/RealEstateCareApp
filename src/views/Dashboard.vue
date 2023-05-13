<template>
    <ion-page>
        <ion-header :translucent="true">
           <Toolbar></toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div id="container">
                <QuickAction></QuickAction>
            </div>
        </ion-content>

        <ion-footer>
            <Navigation></Navigation>
        </ion-footer>
    </ion-page>
</template>
  
<script setup>
import QuickAction from '../components/QuickAction.vue';
import Toolbar from '../components/Toolbar.vue';
import Navigation from '../components/Navigation.vue';
import { IonContent, IonHeader, IonPage, IonFooter } from '@ionic/vue';
</script>
  
<style scoped>
#container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin-inline: 0;
    margin-block: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

#container strong {
    font-size: 20px;
    line-height: 26px;
}

#container p {
    font-size: 16px;
    line-height: 22px;

    color: #8c8c8c;

    margin: 0;
}

#container a {
    text-decoration: none;
}


.title {
    text-align: center;
}

ion-content {
    --offset-bottom: 0px!important;
    --offset-top: 0px!important;
}
</style>
  