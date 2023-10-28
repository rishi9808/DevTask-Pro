import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function FirstPage() {
  const navigate = useNavigate();
  

  useEffect(function () {
    if (!sessionStorage.getItem("userId")) {
      console.log("No useId");
      navigate("/shome");
    } else {
    }
  }, []);

  

  return (<></>)
}

export default FirstPage;
