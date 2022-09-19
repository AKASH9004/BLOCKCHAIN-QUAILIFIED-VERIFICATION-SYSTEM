import "./register.css";
import { useNavigate} from 'react-router-dom'; 


const Register = () => {
    
    const navigate = useNavigate();
        function redirectLogin(){ 
            navigate('/login'); 
        }

    return(
        <div className="register">
            <h1>REGISTER</h1>
            <input type="text" placeholder="Enter your Name"></input>
            <input type="text" placeholder="Enter your Email"></input>
            <input type="password" placeholder="Enter your Password"></input>
            <input type="password" placeholder="Conform Password"></input>
            <div className="button" >REGISTER</div>
            <div>or</div>
            <div className="button" onClick={redirectLogin}>LOGIN</div>

        </div>
    )
}

export default Register