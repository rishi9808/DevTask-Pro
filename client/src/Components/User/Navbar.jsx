import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
function Navbar(prop) {
    const [Cookies, setCookies] = useCookies(["access_token_s"]);
    const navigate = useNavigate();
    const [NavElements, setNavElements] = useState({ N_ToJM: false, N_Home: false, N_Noti: false,N_Logout:false,N_Apjbs:false })
    useEffect((() => {
        setNavElements({
            N_ToJM: false, N_Home: false, N_Noti: false,N_Logout:false,N_Apjbs:false
        })
        setNavElements({
            N_ToJM: prop.N_ToJM, N_Home: prop.N_Home, N_Noti: prop.N_Noti,N_Logout:prop.N_Logout,N_Apjbs:prop.N_Apjbs
        })
        console.log(NavElements)
    }
    ), [])
    function logout() {
        setCookies("access_token_s", "");
        window.localStorage.removeItem("s_userId");
        navigate("/sauth")
    }
    function ToJM(){
        navigate("/jmhome")
    }
    return (


        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" style={{display:'flex',flexGrow:1,height:'73px'}}>
        <h1 className=" d-flex align-items-center text-center py-0 px-4 px-lg-5 m-0 text-primary">Task Manager</h1>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                {NavElements.N_Home && <Link to="/shome" className="nav-item nav-link">Home</Link> }

                {NavElements.N_Noti && <Link to="" className="nav-item nav-link" onClick={() => prop.toggle_noti()}>Notifications</Link> }
            </div>
            {NavElements.N_Logout && <button  onClick={logout}className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Logout<i className=""></i></button> }
            {NavElements.N_ToJM && <a  className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" onClick={ToJM}>Post a Job<i className="fa fa-arrow-right ms-3"></i></a>}
        </div>
        </nav>


    )
}
export default Navbar;

