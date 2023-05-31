export class SurveyOfDamage {
  location = '';
  newDamage = '';
  typeOfDamage = '';
  date;
  requiredAction = true;
  description = '';

  constructor(surveyOfDamage) {
    this.location = surveyOfDamage.location;
    this.newDamage = surveyOfDamage.newDamage;
    this.typeOfDamage = surveyOfDamage.typeOfDamage;
    this.date = surveyOfDamage.date;
    this.requiredAction = surveyOfDamage.requiredAction;
    this.description = surveyOfDamage.description;
  }
}