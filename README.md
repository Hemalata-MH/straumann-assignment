# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `Problem Statement`
 
As a UI developer I have been provided a requirement to develop a patient history time series graph
 
1.	Build a custom react hook 
a.	Which calls the backend API to get the patient information
b.	The custom hook supports fetching patient information based on age (calculated using the patient birthdate)
2.	Use the custom react hook and fetch relevant patient information
3.	Page wireframe:
a.	Patient Information Table
Id	Name	Gender	BirthDate	Address	Phone
b.	Slider
i.	To filter by age (Calculate age based on BirthDate of patient) and show relevant patient information in the table
4.	The backend API to used is:
a.	hapi.fhir.org/baseR4/Patient?_pretty=true
