import "./login.css";
import { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom'; 



function Login () {

    const initialValues = { email: "", password: ""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    
    
    const handleChange = (e) => {
      console.log(e.target);
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value});
      console.log(formValues);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
    
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (!strongRegex.test(values.password)) {
          errors.password = "This is not a valid password!";
        }
        return errors;
      };
    

    return(
        <>
        <div className="screen" >  
            <div >
                <form className="login" onSubmit={handleSubmit}>
                <h1>LOGIN</h1>

                <div className="field">
                <input
                    type="text"
                    name="email"
                    placeholder="Enter your Email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                </div>
                <p>{formErrors.email}</p>

                <div className="field">
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                </div>
                <p>{formErrors.password}</p>

                <input type="text" placeholder="Enter your Private Key"></input>
                <button className="log-button">LOGIN</button>
                </form>
            </div>
        </div> 
    </>
    )
    
}

export default Login