import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'; // Import external CSS file
import axios from 'axios';
import config from '../../config.js'

const SignUp = () => {
  const backendURL = `${config.backendUrl}:${config.backendPort}`;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [organization, setOrganization] = useState('');
  const [showRequiredMessage, setShowRequiredMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password || !organization) {
      setShowRequiredMessage(true);
    }
    else{
      createAccount();
    }
  };

  const createAccount = async() => {
    try {
      const response = await axios.post(`${backendURL}/signup`, {
        username,
        email,
        password,
        organization
      });
      console.log(response)
      const {data} = response
      const {message} = data 

      if(message === "User Already Registered"){
        alert("User Already exists. Try Signin")
      }
      else{
        alert("Added User Successfully")
      }
      setUsername('');
      setEmail('');
      setPassword('');
      setOrganization('');
      setShowRequiredMessage(false);
    } catch (error) {
      console.error(error);
      alert('Error signing in');
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
        <p className="text-white-50 mb-5">Create your account</p>

        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              className="input-field"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
          <div className="input-wrapper">
            <input
              className="input-field"
              type="text"
              placeholder="Organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
            />
          </div>
          <p className="required-text">
            {showRequiredMessage && "Please fill in all fields."}
          </p>
          <button className="signup-btn">Sign Up</button>
        </form>

        <p className="mb-0">
          Already have an account?{' '}
          <a href="" className="text-white-50 fw-bold">
            <Link to="/signin">Login</Link>
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
