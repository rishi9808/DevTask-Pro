// import Navbar from "../Components/Navbar.jsx";
import { useState } from 'react';
import '../../styles/StudentAuth.css';
import axios from 'axios';
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function StudentLogin(props) {
    const [data, setData] = useState({ userName: "", passWord: "" });
    const [Cookies, setCookies] = useCookies(["access_token_s"]);
    const navigate = useNavigate();
    function handleChange(event) {
        const { value, name } = event.target;

        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3002/studentauth/login",
                {
                    userName: data.userName,
                    passWord: data.passWord
                });
            console.log(response);
            if (response.data.message === "User does not exist")
                alert("Incorrect Username");
            else if (response.data.message === "Incorrect Password")
                alert("Incoorect Password");
            else if (response.data.message === "You are successfully logined in") {
                alert("You have been logined")
                setCookies("access_token_s", response.data.token);
                window.localStorage.setItem("s_userId", response.data.userId);
                window.sessionStorage.setItem("SavedJobs",JSON.stringify(response.data.savedJobs))
            }

        }
        catch (err) {
            console.log(err);
        }
        navigate("/shome")
    }
    return (

        <div className='authCentreDiv'>
            <div className="about-section">
                <h1>Empowering Task Distributors for Seamless Efficiency </h1>
                <br /><br />
                <p>Unlock your potential as a task distributor and seize opportunities with our online portal. Connecting task distributors and businesses effortlessly, we facilitate efficient task allocation .</p>
            </div>

            <div className="col-12 col-md-9 col-lg-7 col-xl-6 signup-section">
                <div className="card" style={{ "borderRadius": "15px", 'border': 'none' }}>
                    <div className="card-body p-5">
                        <h2 className="text-uppercase text-center mb-5">Login</h2>

                        <form onSubmit={handleSubmit}>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                                <input type="email" id="form3Example3cg" className="form-control form-control-lg" name="userName" value={data.userName} onChange={handleChange} required />
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example4cg">Password</label>
                                <input type="password" id="form3Example4cg" className="form-control form-control-lg" name="passWord" value={data.passWord} onChange={handleChange} required/>
                            </div>


                            <div className="d-flex justify-content-center">
                                <button type="Submit" className="btn btn-outline-success">Login</button>
                            </div>

                            <p className="text-center text-muted mt-5 mb-0">Dont have an account yet? <a  className="fw-bold text-body"  onClick={props.RegOrLog}><u>Click here</u></a></p>

                        </form>

                    </div>
                </div>
            </div>
        </div>


        // <div className='authCentreDiv'>
        //     <div className="about-section">
        //         <h2>Student authentication</h2>
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, sapien nec eleifend aliquam, ex nibh lacinia justo, et volutpat lorem massa ac urna.</p>
        //         <p>Pellentesque at magna at arcu vehicula euismod sed a nunc. In et sem ut elit pharetra fringilla ut vitae libero.</p>
        //     </div>
        //     <div className="signup-section">
        //         <h2>Sign In</h2>
        //         <form onSubmit={handleSubmit}>
        //             <div className="form-group">

        //                 <input placeholder='email id' type="text" id="name" name="userName" value={data.userName} onChange={handleChange} required></input>
        //             </div>
        //             <div className="form-group">

        //                 <input placeholder='password' type="password" id="password" name="passWord" value={data.passWord} onChange={handleChange} required></input>
        //             </div>
        //             <div className="form-group">
        //                 <button type="Submit">Submit</button>
        //                 <button onClick={props.RegOrLog}>No account? create one</button>
        //             </div>
        //         </form>
        //     </div>

        // </div>
    );
}

export { StudentLogin };