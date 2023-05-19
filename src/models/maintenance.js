export class Maintenance {
    location = '';
    typeOfMaintenance = '';
    requiredAction = '';
    estimatedCost = '';

    constructor(maintenance) {
        this.location = maintenance.location;
        this.typeOfMaintenance = maintenance.typeOfMaintenance;
        this.requiredAction = maintenance.requiredAction;
        this.estimatedCost = maintenance.estimatedCost;
    }
}

