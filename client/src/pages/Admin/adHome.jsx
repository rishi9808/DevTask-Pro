import NavbarJm from '../../Components/Admin/NavbarJm.jsx'
import { useNavigate } from 'react-router-dom'
import '../../styles/StudentHome.css'
import Footer from '../../Components/Common/Footer.jsx';
import { PostJobForm } from '../../Components/Admin/PostJobForm.jsx';


function JmHome() {
    const navigate = useNavigate();
    return (
        <div>
            <NavbarJm  />
            <div className="main-content">
            <PostJobForm />
            </div>
            
            <Footer />
        </div>
    )


}
export default JmHome;