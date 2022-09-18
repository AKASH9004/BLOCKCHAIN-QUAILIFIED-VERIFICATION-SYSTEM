import React from "react";
import "./homepage.css"
import { useNavigate} from 'react-router-dom'; 

const Homepage = () => {
    const navigate = useNavigate(); 
        function redirectRegister(){ 
            navigate('/register'); 
        }
        function redirectLogin(){ 
            navigate('/login'); 
        }
    return(
        <div className="homepage">
            <h1>Home Page</h1>
            <button onClick={redirectRegister}>REGISTER</button>
            <button onClick={redirectLogin}>LOGIN</button>


   
        </div>
    )
}

export default Homepage