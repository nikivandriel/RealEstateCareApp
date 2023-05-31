export class Modification {
    location = '';
    carriedOutBy = '';
    actionToTake = '';
    description = '';
    comments = '';

    constructor(modification) {
        this.location = modification.location;
        this.carriedOutBy = modification.carriedOutBy;
        this.actionToTake = modification.actionToTake;
        this.description = modification.description;
        this.comments = modification.comments;
    }
}