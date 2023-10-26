import { useEffect, useState } from 'react';
import NavbarJm from '../../Components/Admin/NavbarJm.jsx'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import '../../styles/StudentHome.css'
import Footer from '../../Components/Common/Footer.jsx';
import { PostJobForm } from '../../Components/Admin/PostJobForm.jsx';
import { useParams } from 'react-router-dom';


function JmPostJob() {
    const navigate = useNavigate();
    const { pj_id } = useParams();
    console.log("The value that passed to jmpostjob is"+pj_id)
    const [cookie, setCookie] = useCookies("access_token_jm");
    useEffect(function () {
        if (!cookie.access_token_jm) {
            console.log("No cookie")
            navigate("/jmauth")
        }
    }, [])
    const [popUp_nj, setpopUp_nj] = useState(false);
    function handlepopUp_nj() {
        setpopUp_nj(!popUp_nj);
    }

    return (
        <div>
            <NavbarJm openpopUp_nj={handlepopUp_nj} N_Home={true} N_Logout={true} N_NewJob
            ={true} />
            
            <div className="main" style={{display:"flex",justifyContent:"center"}}>
                {pj_id==='newjob' ?<PostJobForm />:<></>}
                
                {/* <JMright_section /> */}
            </div>
            {/* {popUp_nj && <PostJobForm openpopUp_nj={handlepopUp_nj} refreshJobs={refreshJobs}/>}
            {popUp_apl.toggle && <ShowApplications pjid={popUp_apl.pjid} openpopUp_apl={handlepopUp_apl} />} */}


            <Footer />
        </div>
    )


}
export default JmPostJob;