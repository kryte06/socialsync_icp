import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './Components/Navbar';
import Login from './Components/Login';

function App() {
  return (
      <Router> 
        <Routes> 
            <Route exact path="/" element={<Login />} /> 
            <Route path="/home" element={<Navbar />} /> 
        </Routes> 
    </Router> 
  );
}

export default App;