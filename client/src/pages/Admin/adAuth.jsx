import { useState } from 'react';
import { JmRegister } from '../../Components/Admin/JmRegister.jsx';
import { JmLogin } from '../../Components/Admin/JmLogin.jsx';
import NavbarJm from '../../Components/Admin/NavbarJm.jsx';

function JmAuth() {
    const [isInReg,setisReg]=useState(false);
    function RegOrLog(){
        setisReg(!isInReg);
    }
    return (
        <div>
            <NavbarJm N_ToS={true} style={{display:'flex'}} />
            <div className='twoforms'>
                {isInReg?<JmRegister RegOrLog={RegOrLog} />:<JmLogin RegOrLog={RegOrLog}/>}
            </div>
            
        </div>
    )
}

export default JmAuth;
