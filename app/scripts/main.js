// This is a simple *viewmodel* - JavaScript that defines the data and behavior of your UI


var patient = [{
    "_id" : "53fdf3e43cc3c467bb4d9549",
    "_class" : "gov.match.model.Patient",
    "patientSequenceNumber" : "1244re",
    "patientTriggers" : [ 
        {
            "studyId" : "EAY131",
            "patientSequenceNumber" : "1244re",
            "stepNumber" : "0",
            "patientStatus" : "REGISTRATION",
            "message" : "Patienttrigger",
            "accrualGroupId" : "22334a2sr",
            "dateCreated" : "2014-08-27T11:06:12.292-04:00"
        }
    ],
    "assayMessages" : [],
    "diseases" : [],
    "registrationDate" : "2014-08-27T11:06:12.305-04:00"
}];

function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
    this.fullName = ko.computed(function() {
    	return this.firstName() + " " + this.lastName();    
	}, this);
}


// Activates knockout.js
ko.applyBindings(new AppViewModel());
console.log("Hello");
console.dir(patient);
