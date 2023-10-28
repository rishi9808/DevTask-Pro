import "../../styles/UserHome.css";
import { useState, useEffect } from "react";
import axios from "axios";
import NavbarJm from "../../Components/Admin/NavbarJm.jsx";
function ShowEmployee() {
  // need postedjob id and a functioon to close this popup
  const [Appls, setAppls] = useState([]);
  async function fetchAppl() {
    const response = await axios.get(
      `https://devtask-pro.onrender.com/getusers`
    );
    setAppls(response.data);
    console.log("here is the application data");
    console.log(response.data);
  }
  useEffect(function () {
    fetchAppl();
  }, []);

  function getSkills(skills) {
    const filteredSkills = [
      ...new Set(skills.filter((skill) => skill !== "None")),
    ];
    console.log("The skills are" + filteredSkills.join(", "));
    return filteredSkills.join(",");
  }
  function getAvailability(avail) {
    if (avail) {
      return "Yes";
    } else {
      return "No";
    }
  }

  return (
    <>
      <NavbarJm />
      <div className="active main-content m-5 rounded-bottom">
        <div className="popup-content main-content">
          <h3>Employee Status</h3>
          <table style={{ borderSpacing: "20px", borderCollapse: "separate" }}>
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Employee Name</th>
                <th> </th>
                <th>Availability</th>
                <th>Skills</th>
                <th>Finished Tasks</th>
                <hr />
              </tr>
            </thead>
            <tbody>
              {Appls.map((Appl, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>

                  <td>{Appl.fullName}</td>
                  <td> </td>
                  <td>{getAvailability(Appl.availStatus)}</td>
                  <td>{getSkills(Appl.skills)}</td>
                  <td>{Appl.jobdone}</td>
                  <hr />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export { ShowEmployee };
