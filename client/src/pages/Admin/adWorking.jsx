import { useEffect, useState } from "react";
import NavbarJm from "../../Components/Admin/NavbarJm.jsx";
import "../../styles/UserHome.css";
import Footer from "../../Components/Common/Footer.jsx";
import axios from "axios";

function AdWorking() {
  const [jobs, setJobs] = useState([]);

  async function fetchJobs() {
    const mode = "Working";
    const response = await axios.get(
      `http://localhost:3002/gettasks?mode=${mode}`
    );
    console.log(response);
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
              Working Tasks Listing
            </h1>
            <div
              className="tab-class text-center wow fadeInUp "
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
                      <div class="btn btn-warning rounded-3 ">
                        Status: Working
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              {/* <div className="tab-content border-dark">
                <div id="tab-1" className="tab-pane fade show p-0 active border-dark ">
                  {jobs.map((job, index) => (
                    <div className="job-item p-4 mb-4 card border-dark rounded-pill" key={index}>
                      <div className="row g-4">
                        <div className="col-sm-12 col-md-8 d-flex align-items-center ">
                          <div className="text-start ps-4 ">
                            <h3 className="mb-5">{job.title}</h3>

                            <div style={{ display: "flex", maxHeight: "20px" }}>
                              <span className="text-truncate me-3">
                                <h6>To: {job.assignedTo.fullName}</h6>
                              </span>
                              <span className="text-truncate me-3">
                                <h6>Skill: {job.reqSkills}</h6>
                              </span>
                              <span className="text-truncate me-3">
                                <h6>Time required: {job.timeReq}Hrs</h6>
                              </span>
                              <span className="text-truncate me-0"></span>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                          <div className="d-flex mb-3">
                            <h2>Status: Running</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AdWorking;
