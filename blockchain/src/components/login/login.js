import "./login.css";


const Login = () => {
    
    return(
        <>
        <div className="screen">       
            <div className="login">
                <h1>Login</h1>
                <input type="text" placeholder="Enter your Email"></input>
                <input type="password" placeholder="Enter your Password"></input>
                <input type="text" placeholder="Enter your Private Key"></input>
                <div className="button" >LOGIN</div>

            </div>
        </div> 
    </>
    )
    
}

export default Login