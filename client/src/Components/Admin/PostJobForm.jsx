import { useState } from "react";
import "../../styles/PostJobForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function PostJobForm(prop) {
  const navigate = useNavigate();
  const [Data, setData] = useState({ title: "", timeReq: 0, reqSkills: "" });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(Data);
    try {
      const res = await axios.post("https://devtask-pro.onrender.com/newtask", {
        title: Data.title,
        timeReq: Data.timeReq,
        reqSkills: Data.reqSkills,
      });
      alert(res.data.message);
      if (res.data.message === "saved new job successfully") {
        navigate("/jmhome");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
      <div class="card" style={{ borderRadius: "15px", border: "none" }}>
        <div
          class="card-body p-5"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            margin: "0px",
            alignItems: "center",
          }}
        >
          <h2 class="text-uppercase text-center mb-5">Create New Task</h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              margin: "0px",
            }}
          >
            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example3cg">
                Enter Title
              </label>
              <input
                type="text"
                id="form3Example3cg"
                class="form-control form-control-lg"
                name="title"
                value={Data.title}
                onChange={handleChange}
                required
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example5cg">
                Expected Time to do task
              </label>
              <input
                type="number"
                id="form3Example5cg"
                class="form-control form-control-lg"
                name="timeReq"
                value={Data.timeReq}
                onChange={handleChange}
                required
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form3Example6cg">
                Skill
              </label>
              <div style={{ display: "flex" }}>
                <select
                  className="form-control form-control-lg"
                  id="form3Example6cg"
                  name="reqSkills"
                  value={Data.reqSkills}
                  onChange={handleChange}
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please select a valid District")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                >
                  <option value="" disabled>
                    Required Skill
                  </option>
                  <option value="skill1">skill1</option>
                  <option value="skill2">skill2</option>
                  <option value="skill3">skill3</option>
                </select>
              </div>
            </div>

            <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-outline-success">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { PostJobForm };
