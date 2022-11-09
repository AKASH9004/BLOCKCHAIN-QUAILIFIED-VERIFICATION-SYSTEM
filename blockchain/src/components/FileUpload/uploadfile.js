import "./uploadfile.css";
import { useNavigate} from 'react-router-dom'; 

import emailjs from 'emailjs-com'
const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_le4lrd5",
            "template_ugb9k9u",
            e.target,
            "aVd8spLfEWWnzVmBu"    
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
    }
    return(
        <div className="screen" >
            <div>
                <h1>File Upload</h1>
                <form className="uploadfile" onSubmit={sendEmail}>

                <div className="field">
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                />
                </div>

                <div className="field">
                <input
                    type="email"
                    name="user_email"
                    placeholder="Enter the certificate holder's email id"
                />
                </div>

                <input type="submit" value="Send" />
    
            </form>
            </div> 
        </div>
    );
}

export default Mailer;