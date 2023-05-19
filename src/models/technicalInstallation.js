export class TechnicalInstallation {
    location = '';
    typeOfInstallation = '';
    reportedFailures = '';
    testProcedure = '';
    approved = '';
    comments = '';

    constructor(technicalInstallation) {
        this.location = technicalInstallation.location;
        this.typeOfInstallation = technicalInstallation.typeOfInstallation;
        this.reportedFailures = technicalInstallation.reportedFailures;
        this.testProcedure = technicalInstallation.testProcedure;
        this.approved = technicalInstallation.approved;
        this.comments = technicalInstallation.comments;
    }
}