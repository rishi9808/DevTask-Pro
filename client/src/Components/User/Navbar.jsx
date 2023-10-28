import { useNavigate } from "react-router-dom";
function Navbar(prop) {
  const navigate = useNavigate();
  function logout() {
    sessionStorage.removeItem("userId");
    navigate("/sauth");
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0"
      style={{ display: "flex", flexGrow: 1, height: "73px" }}
    >
      <h1 className=" d-flex align-items-center text-center py-0 px-4 px-lg-5 m-0 text-primary">
        <a href="/">Task Manager</a>
      </h1>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          {sessionStorage.getItem("userId") ? (
            <button
              onClick={logout}
              className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
            >
              Logout<i className=""></i>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
