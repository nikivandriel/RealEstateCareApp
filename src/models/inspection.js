import { SurveyOfDamage } from "./surveyOfDamage";
import { Maintenance } from "./maintenance";
import { TechnicalInstallation } from "./technicalInstallation";
import { Modification } from "./modification";

export class Inspection {
    id = Number;
    address = '';
    postalcode = '';
    city = '';
    date;
    completed = false;
    surveyOfDamage;
    maintenance;
    technicalInstallation;
    modification;

    constructor(inspection) {
        this.id = inspection.id;
        this.address = inspection.address;
        this.postalcode = inspection.postalcode;
        this.city = inspection.city;
        this.date = new Date(inspection.date);
        this.completed = inspection.completed;
        this.surveyOfDamage = new SurveyOfDamage(inspection.surveyOfDamage);
        this.maintenance = new Maintenance(inspection.maintenance);
        this.technicalInstallation = new TechnicalInstallation(inspection.technicalInstallation);
        this.modification = new Modification(inspection.modification);    
    }
}