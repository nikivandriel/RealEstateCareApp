export class Modification {
    existingDocs = '';
    location = '';
    carriedOutBy = '';
    actionToTake = '';
    description = '';
    comments = '';

    constructor(modification) {
        this.existingDocs = modification.existingDocs;
        this.location = modification.location;
        this.carriedOutBy = modification.carriedOutBy;
        this.actionToTake = modification.actionToTake;
        this.description = modification.description;
        this.comments = modification.comments;
    }
}