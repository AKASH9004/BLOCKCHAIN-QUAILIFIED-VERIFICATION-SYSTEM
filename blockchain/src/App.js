import './App.css';
import Register from './components/register/register';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    /*<div className="App">
      
      <Register/>
      <Register/>
      <Homepage/>
      <Login/>
      
  </div>*/
  );
}

export default App;
