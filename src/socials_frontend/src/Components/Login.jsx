import React from 'react';
import './Style/login.css';
import im1 from './images/img1.png';
import { useNavigate } from'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const handleClick = () => navigate('/home');
  return (
    <div className='mainContainer'>
    <div className="container">
      <div className="login-form">
        <img src={im1} alt="Logo" width="150" />
        <h3>Login</h3>
        <form autoComplete="off">
          <input type="text" name="uid" placeholder="Enter UID" required autoFocus /><br />
          <input type="password" name="password" placeholder="Enter password" required /><br />
          {/* <input type="submit" value="Login" /> */}
          <button type='button' onClick={handleClick}>
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;