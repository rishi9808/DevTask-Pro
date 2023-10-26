import { useState } from 'react';
import '../../styles/PostJobForm.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function PostJobForm(prop) {
    const navigate = useNavigate();
    const isPopupOpen = true
    const [Data,setData]=useState({title:"",date:'',no_stud:0,invLink:'https://chat.whatsapp.com/G7YKd2NvktE5Z48mhxkoeI',district:"",city:"",wage:0,jobCat:"Others"})
    const userId=GetUserId("jm_userId");
    function handleChange(event){
        const name=event.target.name;
        const value=event.target.value;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    async function handleSubmit(event){
        event.preventDefault();
        console.log(Data);
        try{
            const res=await axios.post("http://localhost:3002/newjob",{
                jmid:userId,
                title:Data.title,
                date:Data.date,
                no_stud:Data.no_stud,
                invLink:Data.invLink,
                district:Data.district,
                city:Data.city,
                wage:Data.wage,
                jobCat:Data.jobCat

            });
            console.log(res);
            // prop.openpopUp_nj();
            alert(res.data.message);
            if(res.data.message==="saved new job successfully"){
              navigate('/jmhome')
            }

        }catch(err){
            console.log(err);
        }
        
    }
    return (

      <div class="col-12 col-md-9 col-lg-7 col-xl-6" >
    <div class="card" style={{ "borderRadius": "15px", 'border': 'none' }}>
      <div class="card-body p-5" style={{display:"flex",justifyContent:"center",flexDirection:"column",margin:'0px',alignItems:"center"}}>
        <h2 class="text-uppercase text-center mb-5">Post new Job</h2>

        <form onSubmit={handleSubmit} style={{display:"flex",justifyContent:"center",flexDirection:"column",margin:'0px'}}>

          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example3cg">Enter Title</label>
            <input type="text" id="form3Example3cg" class="form-control form-control-lg" name="title" value={Data.title} onChange={handleChange} required />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example4cg">Date</label>
            <input type="date" id="form3Example4cg" class="form-control form-control-lg" name="date" value={Data.date} onChange={handleChange} required/>
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example4cg">Invitation link</label>
            <input type="text" id="form3Example4cg" class="form-control form-control-lg" name="invLink" value={Data.invLink} onChange={handleChange} required/>
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example5cg">Expected number of employees</label>
            <input type="number" id="form3Example5cg" class="form-control form-control-lg" name="no_stud" value={Data.no_stud} onChange={handleChange} required/>
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example6cg">Location</label>
            <div style={{ display: "flex" }}>

            <select
                          className="form-control form-control-lg"
                          id="form3Example6cg"
                          name="district"
                          value={Data.district}
                          onChange={handleChange}
                          required
                          onInvalid={(e) =>
                            e.target.setCustomValidity(
                              "Please select a valid District"
                            )
                          }
                          onInput={(e) => e.target.setCustomValidity("")}
                          
                        >
                          <option value="" disabled>
                            DISTRICT
                          </option>
                          <option value="Thiruvananthapuram">
                            Thiruvananthapuram
                          </option>
                          <option value="Kollam">Kollam</option>
                          <option value="Pathanamthitta">Pathanamthitta</option>
                          <option value="Alappuzha">Alappuzha</option>
                          <option value="Kottayam">Kottayam</option>
                          <option value="Idukki ">Idukki </option>
                          <option value="Ernakulam">Ernakulam</option>
                          <option value="Thrissur">Thrissur</option>
                          <option value="Palakkad">Palakkad</option>
                          <option value="Malappuram">Malappuram</option>
                          <option value="Kozhikkode">Kozhikkode</option>
                          <option value="Wayanad">Wayanad</option>
                          <option value="Kannur">Kannur</option>
                          <option value="Kasargode">Kasargode</option>
                        </select>
              <input type="text" id="form3Example6cg_" class="form-control form-control-lg" name="city" placeholder='City' value={Data.city} onChange={handleChange} style={{ marginLeft: "25px" }} required/>
            </div>
            
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form3Example7cg">Expected remuneration per hour</label>
            <input type="number" id="form3Example7cg" class="form-control form-control-lg" name="wage" value={Data.wage} onChange={handleChange} required/>
          </div>

          <label class="form-label" for="jobcatform">Job category</label>
          <div className="form-group mb-4" id="jobcatform">
            <div className="row">
              <div className="col">
                <select className="form-control form-control-sm" id="jobCat" name="jobCat" value={Data.jobCat} onChange={handleChange}>
                  <option value="Others">Others</option>
                    <option value="Catering">Catering</option>
                  <option value="Customer Service">Customer Service</option>
                  <option value="Data Entry">Data Entry</option>
                  <option value="Content writing">Content writing</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Teaching & Education">Teaching & Education</option>
                </select>

              </div>
            </div>
          </div>

          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-outline-success">Post</button>
          </div>


        </form>

      </div>
    </div>
  </div>


        // <div className={`popup-container ${isPopupOpen ? 'active' : ''}`}>
        //     <div className="popup-content">
        //     <h1>Create New Job</h1>
        //     <form onSubmit={handleSubmit} >
        //       <div className="form-group">
        //         <label htmlFor="title">Title:</label>
        //         <input type="text" id="title" name="title" value={Data.title} onChange={handleChange} required></input>
        //       </div>

        //       <div className="form-group">
        //         <label htmlFor="datetime">Date and Time:</label>
        //         <input type="date" id="date" name="date" value={Data.date} onChange={handleChange} required></input>
        //       </div>

              
        //       <div className="form-group">
        //         <label htmlFor="whatsapp">WhatsApp Group Link:</label>
        //         <input type="text" id="whatsapp" name="whatsapp" required></input>
        //       </div>
              
             
              
        //       <div className="form-group">
        //         <label htmlFor="students">Number of Students Needed:</label>
        //         <input type="number" id="no_stud" name="no_stud" value={Data.no_stud} onChange={handleChange} required></input>
        //       </div>

        //       <div className="form-group">
        //         <input type="submit" value="Submit"></input>
        //       </div>

        //       <div className="form-group">
        //         <button onClick={prop.openpopUp_nj}>CANCEL</button>
        //       </div>
        //     </form>
        //     </div>
        // </div>
    )
}

export { PostJobForm };