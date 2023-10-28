import NavbarJm from "../../Components/Admin/NavbarJm.jsx";
import "../../styles/UserHome.css";
import Footer from "../../Components/Common/Footer.jsx";
import { PostJobForm } from "../../Components/Admin/PostJobForm.jsx";

function JmHome() {
  return (
    <div>
      <NavbarJm />
      <div className="main-content">
        <PostJobForm />
      </div>
      <Footer />
    </div>
  );
}
export default JmHome;
