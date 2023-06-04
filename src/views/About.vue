<template>
    <ion-page>
        <ion-header :translucent="true">
            <Toolbar></toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <div class="ion-padding" id="container">
                <h3>Informatie over de app</h3>
                <p>Hier vind u het de README</p>
            </div>
            <div class="ion-padding">
                <h1>RealEstateCareApp</h1>
                <h2>
                    Live versie
                </h2>
                <p> live versie:
                    <a target="_blank"
                        href="https://realestatecareapp.netlify.app">https://realestatecareapp.netlify.app</a>
                </p>
                <h2>Inloggen</h2>
                <p>
                    De inloggegevens voor het gebruik van de applicatie treft u hieronder. Dit is een fictief account en
                    bedoelt voor demo doeleinden.
                    <br />
                    <br />
                    Email: admin@realestatecare.nl
                    <br />
                    <br />
                    Wachtwoord: Welkom123
                    <br />
                    <br />
                    Tijdens het inlogproces wordt er om een authenticatie code gevraagd. Deze wordt getoond in het toaster
                    component nadat er op de knop verificatiecode is geklikt. Dit simuleert het two-factor-authentication
                    proces dat in de definitieve versie gebruikt zal worden.
                </p>

                <h2>
                    De applicatie
                </h2>
                <p>
                    De applicatie bevat een header en een footer. In de header staat de naam van de applicatie, het logo van
                    Real Estate Care en een knop om uit te loggen. Via het logo kom je altijd weer terug op het dashboard en
                    via de uitlog knop weer op het beginscherm. De footer bevat een instellingen knop deze gaat naar het
                    component settings (instellingen) in het midden zit een knop informatie deze gaat naar het component
                    waarin de read.me terug te lezen is. Rechts onderaan zit een fictieve knop waar nog geen inhoud achter
                    zit. Deze is
                    bedoeld voor de toekomst als er meer functionaliteiten worden aangeboden. Op het dashboard worden
                    doormiddel van vier tegeltjes de verschillende functionaliteiten getoond
                </p>
                <ul>
                    <li>Toegewezen rapportages</li>
                    <li>Uitgevoerde rapportages</li>
                    <li>Kennisbank</li>
                    <li>Instellingen</li>
                </ul>
                <p>
                    Via de toegewezen rapportages of de uitgevoerde rapportages komt men door op de knop inspectie invullen
                    of inspectie bewerken te klikken op het component activeInspection van een specifiek ID. Hier kan de
                    inspectie worden aangevuld of worden gewijzigd en vervolgens worden opgeslagen als afgronde of niet
                    afgeronde inspectie.
                </p>
                <h2>
                    Gebruikte technieken
                </h2>
                <ul>
                    <li>Vue.js: Dit framework is gekozen omdat het in de basis heel klein is en gemakkelijk is uit te
                        breiden. Een
                        uitgebreidere toelichting treft u als pdf bij de inleverdocumenten.</li>
                    <li>Ionic: Vue.js wordt aangevuld met Ionic webcomponents en zelf gebouwde componenten om tot een gehele
                        applicatie te komen.</li>
                    <li>Vue-router: Dit router-framework is gebruikt om tussen de schermen van de applicatie te navigeren.
                    </li>
                    <li>jsonbin.io: Is de locatie waar de data staat opgeslagen. Deze kan gelezen en aangepast worden door
                        de
                        applicatie.</li>
                    <li>Axios: Wordt gebruikt om de data op te halen van de API.</li>

                </ul>
                <h2>Veiligheid</h2>
                <p>
                    Om de applicatie veilig te kunnen gebruiken wordt er gebruik gemaakt van een inlogscherm met two-factor
                    authentication. Deze two-factor authentiacttion wordt nu nog gesimuleert maar in de definitieve versie
                    zal
                    er een code worden verzonden naar de telefoon van de gebruiker. Momenteel staan er in de code van de
                    applicatie nog wat gegevens, deze zullen in de toekomst uit de code gehaald moeten worden.
                </p>
                <h2>Gebruiksvriendelijkheid</h2>
                <ul>
                    <li>Er is gebruik gemaakt van iconen in combinatie met tekst. Mocht men de applicatie snel willen
                        scannen zijn
                        de iconen wellicht voldoende maar mocht men de iconen niet snappen dan is er tekstuele ondersteuning
                    </li>
                    <li>De meeste componenten komen uit de Ionic library en zijn dus consistent ontwikkeld</li>
                    <li>Gebruik gemaakt van 1 lettertype</li>
                    <li>Als de gebruiker verkeerde inloggegevens gebruikt of een verkeerde verificatiecode invult wordt dit
                        aan de
                        gebruiker duidelijk gemaakt.</li>
                    <li>Alle pagina's hebben een zelfde indeling</li>

                </ul>
                <h2>Toegankelijkheid</h2>
                <ul>
                    <li>Binnen het formulier zijn alle invoervelden omrand en hebben de labels allemaal een aria-label.</li>
                    <li>De pagina's hebben een titel en een introtekst waarin wordt uitgelegd wat men van de pagina kan
                        verwachten.</li>
                    <li>Knoppen hebben een duidelijke kleur die afsteekt tegen de achtergrond. Als er twee knoppen op een
                        pagina voorkomen hebben deze een andere kleur om mensen het verschil te wijzen, naast de tekst die
                        in de knoppen staat.</li>
                </ul>
                <h2>Style guides/ best practices</h2>
                <ul>
                    <li>Nette folder structuur</li>
                    <li>Alle componenten zijn consistent geschreven en de namen volgens PascalCase genoemd</li>
                    <li>data geeft altijd een functie terug</li>
                    <li>Inputs hebben labels.</li>
                    <li>Alle afbeeldingen hebben een "alt" tekst mochten deze niet geladen worden of gelezen worden door een
                        screenreader.</li>

                </ul>
                <h2>Conclusie</h2>
                <p>In een vervolg stadium van dit project zijn er nog wat punten die aandacht vragen. Zo zijn nog niet alle
                    best practices van Vue.js doorgevoerd en kan er zeker ook nog wat gedaan worden aan de
                    gebruiksvriendelijkheid en toegankelijkheid. Zo bestaan bijvoorbeeld niet alle componenten uit meerdere
                    woorden (best practices). Voor de gebruiksvriendelijkheid zou het beter zijn als op de pagina's waar
                    gegevens via een API worden opgehaald een spinner getoond wordt totdat de data is opgehaald. Nu is dit
                    nog niet het geval en kan de gebruiker bij een langzame internetverbinding denken dat de applicatie niet
                    goed werkt. Daarnaast bleek uit de test met een gebruiker dat alleen het logo om terug te komen naar het
                    dashboard niet voldoende is. De gebruiker had graag nog een andere manier gehad om terug te keren naar
                    het dashboard. Dit zou ik de toekomst aangeboden kunnen worden in de footer navigatie. Naast deze punten
                    zal ook de toegankelijkheid nogmaals bekeken moeten worden en kleine verbeteringen worden doorgevoerd.
                </p>



            </div>
        </ion-content>

        <ion-footer>
            <Navigation></Navigation>
        </ion-footer>
    </ion-page>
</template>

<script setup>
import Toolbar from '../components/Toolbar.vue';
import Navigation from '../components/Navigation.vue';
import { IonContent, IonHeader, IonPage, IonFooter } from '@ionic/vue';

</script>

<style></style>