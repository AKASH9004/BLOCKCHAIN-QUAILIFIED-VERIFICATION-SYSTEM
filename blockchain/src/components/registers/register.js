import "./register.css";
import { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom'; 

function Register() {
const initialValues = { username: "", email: "", password: "", confirmPassword: ""};
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);


const navigate = useNavigate();
function redirectLogin(){ 
    navigate('/login'); 
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
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (values.confirmPassword != values.password) {
        errors.confirmpassword = "Password doesn't match";
    }
    return errors;
  };

  return(
    <div className="register">
            <form onSubmit={handleSubmit}>
        <h1>REGISTER FORM</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
            />
            </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
            //   value={formValues.email}
            />
            </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
            //   value={formValues.password}
            />
            </div>
            <p>{formErrors.password}</p>
            <div className="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirmPassword"
            //   value={formValues.confirmPassword}
            />
            </div>
          <p>{formErrors.confirmPassword}</p>
          <div className="button">
          <button className="fluid ui button blue">REGISTER</button>
          </div>

        </div>
      </form>
        </div>
    );
}

export default Register
