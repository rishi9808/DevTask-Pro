import { useState } from "react";
import "../../styles/UserAuth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UserRegister(props) {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fullName: "",
    userName: "",
    passWord: "",
    skills: ["None", "None", "None"],
  });
  function handleChange(event) {
    const { value, name } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]:value,
    }));
  }

  function handleSkillsSet(event) {
    const { value, name } = event.target;
    const updatedskills = [...data.skills];
    const skillIndex = parseInt(name.replace("skill_", ""));
    updatedskills[skillIndex] = value;
    setData((prevData) => ({
      ...prevData,
      skills: updatedskills,
    }));
    // console.log("skill is"+data.skills)
  }
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3002/userauth/register",
        {
          fullName: data.fullName,
          userName: data.userName,
          passWord: data.passWord,
          skills: data.skills,
        }
      );
      if (response.data.message === "User registered successfully") {
        alert("Registration completed");
        props.RegOrLog()
        navigate("/sauth");
      } else {
        alert("email already regisetred ");
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="authCentreDiv m-2">
        <div className="about-section">
        <h1>Empowering Task Distributors for Seamless Efficiency </h1>
                <br /><br />
                <p>Unlock your potential as a task distributor and seize opportunities with our online portal. Connecting task distributors and businesses effortlessly, we facilitate efficient task allocation .</p>
        </div>

        <div className="col-12 col-md-9 col-lg-7 col-xl-6 signup-section ">
          <div
            className="card"
            style={{ borderRadius: "15px", border: "none" }}
          >
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">
                Create an account
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example1cg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="form3Example1cg"
                    className="form-control form-control-lg"
                    name="fullName"
                    value={data.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3cg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="form3Example3cg"
                    className="form-control form-control-lg"
                    name="userName"
                    value={data.userName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example4cg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="form3Example4cg"
                    className="form-control form-control-lg"
                    name="passWord"
                    value={data.passWord}
                    onChange={handleChange}
                    required
                  />
                </div>


                <label className="form-label" htmlFor="sande">
                  Skills and experience
                </label>
                <div id="sande">
                  <div className="form-group mb-4">
                    <div className="row">
                    <div className="col">
                        <select
                          className="form-control form-control-sm"
                          id="skills1"
                          name="skill_0"
                          value={data.skills[0]}
                          onChange={handleSkillsSet}
                        >
                          <option value="None">None</option>
                          <option value="skill1">
                            skill1
                          </option>
                          <option value="skill2">
                            skill2
                          </option>
                          <option value="skill3">skill3</option>
                        </select>
                      </div>
                      <div className="col">
                        <select
                          className="form-control form-control-sm"
                          id="skills2"
                          name="skill_1"
                          value={data.skills[1]}
                          onChange={handleSkillsSet}
                        >
                          <option value="None">None</option>
                          <option value="skill1">
                            skill1
                          </option>
                          <option value="skill2">
                            skill2
                          </option>
                          <option value="skill3">skill3</option>
                        </select>
                      </div>
                      <div className="col">
                        <select
                          className="form-control form-control-sm"
                          id="skills3"
                          name="skill_2"
                          value={data.skills[2]}
                          onChange={handleSkillsSet}
                        >
                          <option value="None">None</option>
                          <option value="skill1">
                            skill1
                          </option>
                          <option value="skill2">
                            skill2
                          </option>
                          <option value="skill3">skill3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn btn-outline-success" type="Submit">
                    Register
                  </button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">
                  Already have an account?{" "}
                  <a className="fw-bold text-body" onClick={props.RegOrLog}>
                    <u>Login here</u>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export { UserRegister };
