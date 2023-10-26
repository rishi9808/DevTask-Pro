import { useEffect, useState } from 'react';
import Navbar from '../../Components/User/Navbar.jsx'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import Footer from '../../Components/Common/Footer.jsx';
import axios from "axios";

function UserHome() {
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies("access_token_s");
    
    
  
    
    
      useEffect(function () {
        if (!cookie.access_token_s) {
          console.log("No cookie");
          navigate("/sauth");
        }
        else{
         
        }
        
        
      }, []);



    return (
        <div>
            <Navbar />
            <div className="main-content">
                
                
            </div>
            
            <Footer />
        </div>
    )


}
export default UserHome;