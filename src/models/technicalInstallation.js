export class TechnicalInstallation {
    location = '';
    typeOfInstallation = '';
    reportedFailures = '';
    approved = '';
    comments = '';

    constructor(technicalInstallation) {
        this.location = technicalInstallation.location;
        this.typeOfInstallation = technicalInstallation.typeOfInstallation;
        this.reportedFailures = technicalInstallation.reportedFailures;
        this.approved = technicalInstallation.approved;
        this.comments = technicalInstallation.comments;
    }
}