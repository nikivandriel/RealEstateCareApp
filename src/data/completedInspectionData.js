const completedInspectionData = {
  inspections: [
    {
      idType: "#IS",
      id: 2006487,
      name: "Duplex woning",
      address: "Leeuwerikstraat 1",
      zipcode: "1234 AB",
      city: "Amsterdam",
      date: new Date("2023-04-07"),
      completed: false,
      surveyOfDamage: {
        location: "Dak",
        newDamage: "Nieuwe schade",
        typeOfDamage: "Slijtage",
        date: "2023-04-07",
        requiredAction: "Direct actie ondernemen",
        description: "Dakbeschot vervangen wegens rotte plekken"
      }
    }

  ]
}

export default completedInspectionData;