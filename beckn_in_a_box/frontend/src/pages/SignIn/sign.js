import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom'
import './sign.css'; // Import external CSS file
import axios from 'axios'
import ls from 'local-storage';
import config from '../../config.js'

const SignIn = () => {
  const backendURL = `${config.backendUrl}:${config.backendPort}`;
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRequiredMessage, setShowRequiredMessage] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setShowRequiredMessage(true);
    } else {
      const data = await loggedIn();
      console.log(data.length)
      if(data.length !== 0){
        const userData  = await data[0]
        await ls.set('UserData', userData)
        navigate('/home');
      }
      else{
      navigate('/signup');
      }
    }
  };

  const loggedIn = async() => {
    try {
      const response = await axios.post(`${backendURL}/signin`, {
        email,
        password,
      });
      if(response.data.length !== 0){

      alert("Logged in Successfully")
      setEmail('')
      setPassword('')
      setShowRequiredMessage(false);
      }
      else{
      alert('Wrong Credentials or Try SignUp');
      }
      return response.data 
    } catch (error) {
      console.error(error);
      alert('Error signing in');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-content">
        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
        <p className="text-white-50 mb-5">Please enter your login and password!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              className="input-field"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <input
              className="input-field"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <p className="small mb-3 pb-lg-2">
            <a className="text-white-50" href="#!">
              Forgot password?
            </a>
          </p>
          <p className="required-text">{showRequiredMessage && "Please fill in all fields."}</p>
          <button className="login-btn">Login</button>
        </form>

        <p className="mb-0">
          Don't have an account? <a href="" className="text-white-50 fw-bold"><Link to='/signup'>Sign Up</Link></a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
