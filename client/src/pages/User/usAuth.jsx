import { useState } from "react";
import "../../styles/UserAuth.css";
import { UserRegister } from "../../Components/User/UserRegister";
import { UserLogin } from "../../Components/User/UserLogin";
import Navbar from "../../Components/User/Navbar";

function StudentAuth() {
  const [isInReg, setisReg] = useState(false);
  function RegOrLog() {
    setisReg(!isInReg);
  }
  return (
    <div>
      <Navbar />
      <div className="twoforms">
        {isInReg ? (
          <UserRegister RegOrLog={RegOrLog} />
        ) : (
          <UserLogin RegOrLog={RegOrLog} />
        )}
      </div>
    </div>
  );
}

export default StudentAuth;
