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
var treatmentArm = [{
    "_id" : "3",
    "_class" : "gov.match.model.TreatmentArm",
    "name" : "NOMID",
    "description" : "Neonatal-onset multisystem inflammatory disease, is a rare disease that is often fatal.",
    "drugs" : [ 
        {
            "_id" : "1",
            "name" : "Afatinib",
            "description" : "Afatinib",
            "drugClass" : "angiokinase inhibitor"
        }, 
        {
            "_id" : "2",
            "name" : "tylenol",
            "description" : "tylenol",
            "drugClass" : "angiokinase inhibitor"
        }
    ],
    "treatmentArmStatus" : "PENDING",
    "statusLog" : {
        "1408385797042" : "PENDING"
    },
    "dateCreated" : "2014-08-18T14:16:37.042-04:00"
}];

function PatientViewModel() {
    this._id = patient[0]._id;
	this.patientSequenceNumber = ko.observable(patient[0].patientSequenceNumber);
	this.registrationDate = patient[0].registrationDate;
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
    this.fullName = ko.computed(function() {
    	return this.firstName() + " " + this.lastName();    
	}, this);
}

function TreatmentArmViewModel() {
    this._id = treatmentArm[0]._id;
	this.name = ko.observable(treatmentArm[0].name);
	this.description = ko.observable(treatmentArm[0].description);
	this.treatmentArmStatus = ko.observable(treatmentArm[0].treatmentArmStatus);
	this.availableStatus = ['PENDING', 'APPROVED', 'EXEMPT', 'DENIED'];
	this.chosenStatus = ko.observableArray([treatmentArm[0].treatmentArmStatus]);
	this.countries = ['Japan', 'Bolivia', 'New Zealand'];
    this.selectedCountry = ko.observable('Latvia');
}


// Activates knockout.js
var koPatient = ko.applyBindings(new PatientViewModel(), document.getElementById('match-patient'));
var koTreatmentArm = ko.applyBindings(new TreatmentArmViewModel(), document.getElementById('match-treatmentArm'));
console.log("Hello Knockout");
console.dir(patient);
$( document ).ready(function() {
    console.log( "ready!" );
    $('#btn-patient').on('click', function() {
    	console.log('clicked on btn-patient');
    	$('#match-patient').show();
    	$('#match-treatmentArm').hide();
    });
    $('#btn-treatmentArm').on('click', function() {
    	console.log('clicked on btn-treatmentArm');
    	$('#match-treatmentArm').show();
    	$('#match-patient').hide();
    });
});