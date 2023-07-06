import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        console.log(Username, password, email)
      const response = await axios.post('http://localhost:5000/signup', {
        Username,
        password,
        email,
      });
      console.log(response.data);
    } catch (error) {
      console.log("something went wrong")
    }
  };
  

  return (
    <div className='divvv'>
    <div className='signup-container'>
      <h2>Sign Up</h2>
     
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={Username}
            placeholder='username'
            onChange={handleUsernameChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder='password'
            onChange={handlePasswordChange}
          />
        </div>
        <div className='form-group'> 
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder='email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Sign Up</button>
        <p>
        Already have an account?{' '}
        <Link to="/login">Login</Link>
      </p>
      </form>
      
    </div>
  
    </div>
    
  );
}

export default SignUp;