// Patient.js
import React, { useState } from "react";
import { Range } from "react-range";
import useFetchPatientData from "./hooks/useFetchPatientData";
import useCalculateAge from "./hooks/useCalculateAge"; // Import the custom hook

// const calculateAge = (birthDate) => {
//   const today = new Date();
//   const birthDateYear = parseInt(birthDate.split("-")[0]);
//   const birthDateMonth = parseInt(birthDate.split("-")[1]);
//   const birthDateDay = parseInt(birthDate.split("-")[2]);
//   let age = today.getFullYear() - birthDateYear;
//   if (
//     today.getMonth() < birthDateMonth ||
//     (today.getMonth() === birthDateMonth && today.getDate() < birthDateDay)
//   ) {
//     age--;
//   }
//   return age;
// };

const Patient = () => {
  //const [selectedAge, setSelectedAge] = useState(32);
  const [ageRange, setAgeRange] = useState([60, 100]);
  const {
    data: patientData,
    error,
    loading,
  } = useFetchPatientData("https://hapi.fhir.org/baseR4/Patient?_pretty=true");

  const calculateAge = useCalculateAge(); // Get the calculateAge function

  const filteredPatients =
    patientData?.entry?.filter((entry) => {
      if (entry.resource.birthDate) {
        const age = calculateAge(entry.resource.birthDate);
        return age !== null && age >= ageRange[0] && age <= ageRange[1];
      }
      return false;
    }) || [];

  const showTable = filteredPatients && filteredPatients.length > 0;

  const getFullAddress = (address) => {
    const { line, city, state } = address[0];
    return `${line.join(" ")} ${city}, ${state}`;
  };

  const getPhone = (telecom) => {
    const telecomArray = telecom || [];
    const phoneObject = telecomArray.find(
      (telecom) => telecom.system === "phone"
    );
    return phoneObject ? phoneObject.value : "NA";
  };

  return (
    <div className="table">
      <br></br>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <div>
          <div>
            <label htmlFor="ageRangeSlider" style={{ fontSize: "18px" }}>
              Filter by age
            </label>
            <Range
              step={1}
              min={1}
              max={100}
              values={ageRange}
              onChange={(values) => setAgeRange(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "6px",
                    width: "50%",
                    backgroundColor: "lightblue",
                    position: "relative",
                    marginLeft: "7rem",
                    marginTop: "-0.5rem",
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "16px",
                    width: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#007bff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: "-8px",
                    left: `${props.style.left}`,
                  }}
                >
                  {isDragged && (
                    <span
                      style={{
                        fontSize: "12px",
                        fontFamily: "Verdana",
                        color: "#fff",
                      }}
                    >
                      {props["aria-valuenow"]}
                    </span>
                  )}
                  {!isDragged && (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontFamily: "Verdana",
                        color: "#fff",
                        background: "#007bff",
                        borderRadius: "4px",
                        padding: "4px",
                        position: "absolute",
                        top: "-30px",
                        left: `${props.style.left}`,
                      }}
                    >
                      {props["aria-valuenow"]}
                    </span>
                  )}
                </div>
              )}
            />
          </div>
          <p></p>

          {showTable && (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Address</th>
                  <th>Calculated Age</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {filteredPatients.map((patient) => (
                  <tr key={patient.resource.id}>
                    <td>{patient.resource.id}</td>
                    <td>{patient.resource.name[0].given.join(" ")}</td>
                    <td>{patient.resource.gender}</td>
                    <td>
                      {patient?.resource?.address && (
                        <span>
                          {getFullAddress(patient?.resource?.address) || "NA"}
                        </span>
                      )}
                    </td>
                    <td>{calculateAge(patient.resource.birthDate)}</td>
                    <td>{getPhone(patient.resource.telecom)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Patient;
