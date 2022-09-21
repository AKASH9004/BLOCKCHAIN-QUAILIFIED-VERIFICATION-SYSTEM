import React from "react";
import "./verify.css";


const Verify = () => {
    

    return(
        <div className="c">
        <div className="verify">
            <h1>Verify</h1>
            <input type="text" placeholder="Enter the Certificate's Private Key you need to verify"></input>
            <div className="button" >VERIFY</div>

        </div>
        </div>
    )
}

export default Verify