import { useEffect, useState } from "react";
import Navbar from "../../Components/User/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Common/Footer.jsx";
import axios from "axios";

function UserHome() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [activeJob, setActiveJob] = useState([false, {}]);
  const [finishedJobs, setFinishedJobs] = useState([]);

  useEffect(function () {
    if (!sessionStorage.getItem("userId")) {
      console.log("No useId");
      navigate("/sauth");
    } else {
    }
  }, []);

  async function fetchJobs() {
    const userid = sessionStorage.getItem("userId");
    const response = await axios.get(
      `http://localhost:3002/usertasks?userid=${userid}`
    );
    console.log(response);
    setJobs(response.data);
  }
  useEffect(() => {
    taskfinder();
  }, [jobs]);
  useEffect(() => {
    fetchJobs();
  }, []);
  function taskfinder() {
    let tempfinishedJobs = [];
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].Status === "allocated") {
        setActiveJob([true, jobs[i]]);
      } else {
        tempfinishedJobs.push(jobs[i]);
      }
    }
    setFinishedJobs(tempfinishedJobs);
    console.log("active job is");
    console.log(activeJob);
  }

  async function handleFinished() {
    await axios.post("http://localhost:3002/taskwork", {
      userid: activeJob[1].assignedTo,
      taskid: activeJob[1]._id,
      change: "done",
    });
    fetchJobs();
    setActiveJob([]);
  }

  return (
    <>
      <Navbar />
      <div className="center_section">
        <div className="container-xxl py-5">
          {activeJob[0] ? (
            <>
              <div className="container">
                <h1
                  className="text-center mb-5 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Pending Tasks Listing
                </h1>
                <div
                  className="tab-class text-center wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                   <div class="row">
                
                <div class="col-sm-6 mb-3 ">
                  <div class="card p-3 rounded-3">
                    <div class="card-body">
                      <h5 class="card-title">{activeJob[1].title}</h5>
                      <p class="text-black-50 p-1">

                        Skill : <span className=" text-dark">{activeJob[1].reqSkills}</span>
                        <br />
                        Time required :<span className=" text-dark"> {activeJob[1].timeReq}Hrs</span>
                      </p>
                      <button
                                className="btn btn-outline-primary"
                                onClick={function () {
                                  handleFinished();
                                }}
                              >
                                Mark as Complete
                              </button>
                    </div>
                  </div>
                </div>
  
              </div>
                  {/* <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                      <div className="job-item p-4 mb-4">
                        <div className="row g-4">
                          <div className="col-sm-12 col-md-8 d-flex align-items-center">
                            <div className="text-start ps-4">
                              <h3 className="mb-5">{activeJob[1].title}</h3>

                              <div
                                style={{ display: "flex", maxHeight: "20px" }}
                              >
                                <span className="text-truncate me-3"></span>
                                <span className="text-truncate me-3">
                                  <h6>Skill: {activeJob[1].reqSkills}</h6>
                                </span>
                                <span className="text-truncate me-3">
                                  <h6>
                                    Time required: {activeJob[1].timeReq}Hrs
                                  </h6>
                                </span>
                                <span className="text-truncate me-0"></span>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div className="d-flex mb-3">
                              <button
                                className="btn btn-primary"
                                onClick={function () {
                                  handleFinished();
                                }}
                              >
                                Finished
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="container">
                <h3
                  className="text-center mb-5 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  You have currrently no allocated tasks!!
                </h3>
              </div>
            </>
          )}
         
          {finishedJobs ? (
            <>
              <div className="container">
                <h3
                  className="text-center mb-5 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  Your Finished Tasks
                </h3>
              </div>

              <div className="container">
                <div
                  className="tab-class text-center wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div class="row">
                {finishedJobs.map((job, index) => (
                <div class="col-sm-6 mb-3 " key={index}>
                  <div class="card p-3 rounded-3">
                    <div class="card-body">
                      <h5 class="card-title">{job.title}</h5>
                      <p class="text-black-50 p-1">

                        Skill : <span className=" text-dark">{job.reqSkills}</span>
                        <br />
                        Time required :<span className=" text-dark"> {job.timeReq}Hrs</span>
                      </p>
                      <div class="btn btn-success rounded-3 ">
                        Finished
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              
                  {/* <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                      {finishedJobs.map((job, index) => (
                        <div className="job-item p-4 mb-4" key={index}>
                          <div className="row g-4">
                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                              <div className="text-start ps-4">
                                <h3 className="mb-5">{job.title}</h3>

                                <div
                                  style={{ display: "flex", maxHeight: "20px" }}
                                >
                                  <span className="text-truncate me-3"></span>
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
                                <button
                                  className="btn  disabled-button"
                                  disabled
                                >
                                  Finished
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserHome;
