import { useState } from 'react';
import '../../styles/StudentAuth.css';
import { StudentRegister } from '../../Components/User/StudentRegister';
import { StudentLogin } from '../../Components/User/StudentLogin';
import Navbar from '../../Components/User/Navbar';

function StudentAuth() {
    const [isInReg,setisReg]=useState(false);
    function RegOrLog(){
        setisReg(!isInReg);
    }
    return (
        <div>
            <Navbar  />
            <div className='twoforms'>
                {isInReg?<StudentRegister RegOrLog={RegOrLog} />:<StudentLogin RegOrLog={RegOrLog}/>}
            </div>
            
        </div>
    )
}

export default StudentAuth;
