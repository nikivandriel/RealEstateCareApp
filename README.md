# RealEstateCareApp
This is a project for the LOI course front-end frameworks

### Installatie
Clone de repository:

    git clone <repository-url>

Installeer packages:

    npm install

Starten van de server:

    ionic serve

### Live versie
[https://realestatecareapp.netlify.app](https://realestatecareapp.netlify.app)

### Inloggen
De inloggegevens voor het gebruik van de applicatie treft u hieronder. Dit is een fictief account en bedoelt voor demo doeleinden

| Email                 | Wachtwoord   |
|-----------------------|--------------|
| admin@realestatecare.nl | Welkom123  |


Tijdens het inlogproces wordt er om een authenticatie code gevraagd. Deze wordt getoond in het toaster component nadat er op de knop verificatiecode is geklikt. Dit simuleert het two-factor-authentication proces dat in de definitieve versie gebruikt zal worden.

### De applicatie
De applicatie bevat een header en een footer. In de header staat de naam van de applicatie, het logo van Real Estate Care en een knop om uit te loggen. Via het logo kom je altijd weer terug op het dashboard en via de uitlog knop weer op het beginscherm. De footer bevat een instellingen knop deze gaat naar het component settings (instellingen) in het midden zit een knop informatie deze gaat naar het component waarin de read.me terug te lezen is. Rechts onderaan zit een fictieve knop waar nog geen inhoud achter zit. Deze is bedoeld voor de toekomst als er meer functionaliteiten worden aangeboden.

Op het dashboard worden doormiddel van vier tegeltjes de verschillende functionaliteiten getoond
- Toegewezen rapportages
- Uitgevoerde rapportages
- Kennisbank
- Instellingen

Via de toegewezen rapportages of de uitgevoerde rapportages komt men door op de knop inspectie invullen of inspectie bewerken op het component activeInspection van een specifiek ID. Hier kan de inspectie worden aangevuld of worden gewijzigd en vervolgens worden opgeslagen als afgronde of niet afgeronde inspectie. 

### Gebruikte technieken
- Vue.js: Dit framework is gekozen omdat het in de basis heel klein is en gemakkelijk is uit te breiden. 
- Ionic: Vue.js wordt aangevuld met Ionic webcomponents en zelf gebouwde componenten om tot een gehele applicatie te komen.   
- Vue-router: Dit router-framework is gebruikt om tussen de schermen van de applicatie te navigeren.
- jsonbin.io: Is de locatie waar de data staat opgeslagen. Deze kan gelezen en aangepast worden door de applicatie.
- Axios: Wordt gebruikt om de data op te halen van de API.

### Veiligheid
Om de applicatie veilig te kunnen gebruiken wordt er gebruik gemaakt van een inlogscherm met two-factor authentication. Deze two-factor authentiacttion wordt nu nog gesimuleert maar in de definitieve versie zal er een code worden verzonden naar de telefoon van de gebruiker. Momenteel staan er in de code van de applicatie nog wat gegevens, deze zullen in de toekomst uit de code gehaald moeten worden. 

### Gebruiksvriendelijkheid


### Toegankelijkheid

### Style guides/ best practices








