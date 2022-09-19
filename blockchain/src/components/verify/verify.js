import "./verify.css";
import { useNavigate} from 'react-router-dom'; 


const Verify = () => {
    
    const navigate = useNavigate();
        function redirectVerify(){ 
            navigate('/verify'); 
        }

    return(
        <div className="verify">
            <h1>Login</h1>
            <input type="text" placeholder="Enter the Certificate's Private Key you need to verify"></input>
            <div className="button" >VERIFY</div>

        </div>
    )
}

export default Verify