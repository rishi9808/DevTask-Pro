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
            const response = await axios.post("http://localhost:3002/userauth/login",
                {
                    userName: data.userName,
                    passWord: data.passWord
                });
            if(response.data.token==="admin"){
                navigate("/jmhome")
            }
            else{
                console.log(response);
            if (response.data.message === "User does not exist")
                alert("Incorrect Username");
            else if (response.data.message === "Incorrect Password")
                alert("Incoorect Password");
            else if (response.data.message === "You are successfully logined in") {
                alert("You have been logined")
                setCookies("access_token_s", response.data.token);
                sessionStorage.setItem("userId", response.data.userId);
                //window.localStorage.setItem("userId", response.data.userId);
            }
            navigate("/shome")
            }
            

        }
        catch (err) {
            console.log(err);
        }
        
    }
    return (

        <div className='d-flex'>
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
                                <button type="Submit" className="btn btn-outline-success rounded-3">Login</button>
                            </div>

                            <p className="text-center text-muted mt-5 mb-0">Dont have an account yet? <a  className="fw-bold text-body"  onClick={props.RegOrLog}><u>Click here</u></a></p>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export { StudentLogin };