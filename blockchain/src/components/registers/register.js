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

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   }, [formErrors]);
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
        <h1>Register Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
            //   value={formValues.username}
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
            
            <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City Name"
            //   value={formValues.confirmPassword}
            />
            </div>
            <div className="field">
            <label>State</label>
            <select name="state">
              <option>--SELECT STATE--</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
            </div>
          
          <button className="fluid ui button blue">REGISTER</button>
        </div>
      </form>
        </div>
    );
}

export default Register
