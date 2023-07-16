const Data = {
	"patient": [{
		"name": "HARI BABU",
		"phoneNumber": "7894561230",
		"dob": "17-08-1987",
		"dateOfIssues": "15-07-2023",
		"bp": "125/82",
		"temperature": "98.0",
		"spo2": "98%"
	}],
	"Medications": [{
			"drugname": "Flomax (tamsulosin)",
			"drugClass": "Alpha-blocker",
			"takenThrough": "Oral",
			"dosage": "1, 0.4 mg capsule taken 30 minutes after the same meal daily",
			"sideEffects": [
				"Headache,",
				"Dizziness,",
				"Nasal swelling"
			],
			"range": "0-16mg/day",
			"consultDoctorIf": [
				"Severe pain in the side, abdomen, groin, or genitals.",
				"Presence of blood in the urine.",
				"If you see signs of a urinary tract infection, including any pain or burning sensation at the time of urination.",
				"Severe Vomiting."
			]
		},
		{
			"drugname": "Repaglinide",
			"drugClass": "Prandin®",
			"takenThrough": "Oral",
			"range": "0.5-16 mg",
			"maxDosePerMeal": "4 mg",
			"dosage": "Taken two, three, or four times daily - 15-30 minutes of meal",
			"sideEffects": "hypoglycemia",
			"safeForElderly": true,
			"durationOfAction": "4 hours",
			"takeWithin": "15-30 minutes of meal",
			"consultDoctorIf": [
				"Feeling or being sick,",
				"Abdominal (tummy) pain,",
				"Rapid, deep breathing,",
				"Signs of dehydration, such as a headache, dry skin, and a weak, rapid heartbeat,",
				"Difficulty staying awake."
			]
		},
		{
			"drugname": "Aspirin",
			"drugClass": "Nonsteroidal Anti-inflammatory Drugs",
			"takenThrough": "Oral",
			"range": "75–100 mg",
			"dosage": "1 tablet by mouth, 3 times a day with food, every 6 hours",
			"sideEffects": [
				"Gastrointestinal effects,",
				"Increased bleeding,",
				"Allergic reactions: Asthma exacerbation,",
				"Tinnitus (ringing in ears)"
			],
			"consultDoctorIf": [
				"Severe pain",
				"Fever",
				"Bloody stools",
				"Persistent nausea and vomiting",
				"Weight loss",
				"Skin that appears yellow",
				"Severe tenderness when you touch your abdomen",
				"Swelling of the abdomen"
			]
		}

	]
} 

export default Data