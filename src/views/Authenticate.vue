<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-title class="title">Real Estate Care</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content :fullscreen="true">
        <div id="container">
          <Authentication/>
        </div>
      </ion-content>
  
      <ion-footer>
        <ion-toolbar class="footer">
          <ion-title class="title"></ion-title>
        </ion-toolbar>
      </ion-footer>
    </ion-page>
  </template>
  
  <script setup>
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/vue';
  import Authentication from '../components/Authentication.vue';
  </script>
  
  <style scoped>
  
  ion-content {
    --background: lightgrey;
  }
  
  #container {
    text-align: center;
  
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
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
  
  .footer {
    --ion-toolbar-background: #293439;
  }
  
  .title {
    text-align: center;
  }
  </style>
  