import { useEffect, useState } from "react";
import NavbarJm from "../../Components/Admin/NavbarJm.jsx";
import "../../styles/UserHome.css";
import Footer from "../../Components/Common/Footer.jsx";
import axios from "axios";

function AdFinished() {
  const [jobs, setJobs] = useState([]);

  async function fetchJobs() {
    const mode = "Finished";
    const response = await axios.get(
      `https://devtask-pro.onrender.com/gettasks?mode=${mode}`
    );
    setJobs(response.data);
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <NavbarJm />
      <div className="center_section">
        <div className="container-xxl py-5">
          <div className="container">
            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
              Finished Tasks Listing
            </h1>
            <div
              className="tab-class text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div class="row">
                {jobs.map((job, index) => (
                <div class="col-sm-6 mb-3 " key={index}>
                  <div class="card p-3 rounded-3">
                    <div class="card-body">
                      <h5 class="card-title">{job.title}</h5>
                      <p class="text-black-50 p-1">
                        Assigned to : <span className=" text-dark"> {job.assignedTo.fullName} </span>
                        <br />
                        Skill : <span className=" text-dark">{job.reqSkills}</span>
                        <br />
                        Time required :<span className=" text-dark"> {job.timeReq}Hrs</span>
                      </p>
                      <div class="btn btn-success rounded-3 ">
                        Status: Finished
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AdFinished;
