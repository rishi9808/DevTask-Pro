import { useEffect, useState } from 'react';
import NavbarJm from '../../Components/Admin/NavbarJm.jsx'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import '../../styles/StudentHome.css'
import Footer from '../../Components/Common/Footer.jsx';
import { PostJobForm } from '../../Components/Admin/PostJobForm.jsx';
import axios from "axios";


function AdPending() {
    const [jobs, setJobs] = useState([]);

  async function fetchJobs() {
    const mode="Pending"
    const response = await axios.get(
      `http://localhost:3002/gettasks?mode=${(mode)}`
    );
    console.log(response);
    setJobs(response.data);
    
  }

  useEffect( () => {
     fetchJobs();   
  }, []);



  return (
    <>
    <NavbarJm  />
    <div className="center_section">
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Pending Tasks Listing
          </h1>
          <div
            className="tab-class text-center wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                {jobs.map((job, index) => (
                  <div className="job-item p-4 mb-4" key={index}>
                    <div className="row g-4">
                      <div className="col-sm-12 col-md-8 d-flex align-items-center">
                        <div className="text-start ps-4">
                          <h3 className="mb-5">
                            {job.title}
                            
                          </h3>

                          <div style={{ display: "flex", maxHeight: "20px" }}>
                            <span className="text-truncate me-3">
                              
                              
                            </span>
                            <span className="text-truncate me-3">
                            <h6>Skill:  {job.reqSkills}</h6>
                            </span>
                            <span className="text-truncate me-3">
                              
                            <h6>Time required:  {job.timeReq}Hrs</h6>
                            </span>
                            <span className="text-truncate me-0">
                              
                              {/* {job.no_stud_applied}/{job.no_stud} */}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div className="d-flex mb-3">
                          
                         <h2>Status: Waiting to allocate</h2>
                        </div>
                        {/* <small className="text-truncate"><i className="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jul, 2023</small> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
export default AdPending;