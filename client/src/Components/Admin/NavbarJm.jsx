import { Link } from "react-router-dom";

function NavbarJm (prop){
    return(

        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0" style={{display:'flex',flexGrow:1,height:'73px'}}>
        <h1 className=" d-flex align-items-center text-center py-0 px-4 px-lg-5 m-0 text-primary">Task Manager</h1>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to="/jmhome" className="nav-item nav-link">Home</Link>
                <Link to="/adfinished"  className="nav-item nav-link ">Finished Tasks</Link>
                <Link to="/adworking"   className="nav-item nav-link">Working Tasks</Link>
                <Link to="/adpending"   className="nav-item nav-link">Pending Tasks</Link>
                <Link to="/employees"   className="nav-item nav-link">Employee Status</Link>
  

            </div>
            
        </div>
      
    </nav>
  );
}
export default NavbarJm;
