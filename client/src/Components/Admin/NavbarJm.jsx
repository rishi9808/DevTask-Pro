import {Link} from "react-router-dom";
import {useCookies} from 'react-cookie';
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
function NavbarJm (prop){
    const [Cookies,setCookies]=useCookies(["access_token_jm"]);
    const navigate=useNavigate();
    const [NavElements, setNavElements] = useState({ N_ToS: false, N_Home: false, N_NewJob: false,N_Logout:false })
    useEffect((() => {
        setNavElements({
            N_ToS: false, N_Home: false, N_NewJob: false,N_Logout:false
        })
        setNavElements({
            N_ToS: prop.N_ToS, N_Home: prop.N_Home, N_NewJob: prop.N_NewJob,N_Logout:prop.N_Logout
        })
        console.log(NavElements)
    }
    ), [])
    function logout(){
        setCookies("access_token_jm","");
        window.localStorage.removeItem("jm_userId");
        navigate("/jmauth")
    }

    function ToS(){
        navigate("/shome")
    }
    function ToPostJob(){
        const pj_id="newjob"
        navigate(`/JmPostJob/${pj_id}`)
    }
    return(

        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" style={{display:'flex',flexGrow:1,height:'73px'}}>
        <h1 className=" d-flex align-items-center text-center py-0 px-4 px-lg-5 m-0 text-primary">HIREMEUP</h1>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                {NavElements.N_Home && <Link to="/jmhome" className="nav-item nav-link">Home</Link> }
                <Link to=""  className="nav-item nav-link ">About</Link>
                {NavElements.N_NewJob && <button style={{border:'none',background:'inherit'}} className=" nav-item nav-link " onClick={ToPostJob}>Post a Job</button>
                 }
                
                <Link to=""   className="nav-item nav-link">Contact</Link>
            </div>
            {NavElements.N_Logout && <button  onClick={logout}className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Logout<i className=""></i></button> }
            {NavElements.N_ToS && <button  onClick={ToS}className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Find a Job<i className="fa fa-arrow-right ms-3"></i></button> }
            
        </div>
        </nav>


        // <nav>

            
        //     <div className="navDiv">
        //     {NavElements.N_Home && <Link to="/jmhome">Home</Link> }
        //     {NavElements.N_NewJob && <button onClick={prop.openpopUp_nj}>Create new Job</button> }
        //     {NavElements.N_Logout && <button onClick={logout}>Logout</button> }
        //     {NavElements.N_ToS&& <button className="button-17" onClick={ToS}>Are you a Student</button> }
            
        // </div>
        // </nav>
        
    )
}
export default NavbarJm;

