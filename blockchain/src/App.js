import './App.css';
import Register from './components/registers/register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Verify from './components/verify/verify';
import Navbar from './components/homepage/navbar';
import Mailer from './components/FileUpload/uploadfile';




function App() {
  return (
    <>
    
    <div className="App">
      
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/verify" element={<Verify/>}/>
        <Route exact path="/uploadfile" element={<Mailer/>}/>

      </Routes>
      </BrowserRouter>
    </div>
    </>
    /*<div className="App">
      
      <Register/>
      <Register/>
      <Homepage/>
      <Login/>
      
  </div>*/
  );
}

export default App;
