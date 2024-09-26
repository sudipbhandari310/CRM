import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/userApiService';

import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser(details);
      console.log('Login Successful', response);
      console.log('loading dashboard');

      navigate('/adminDashboard');
    } catch (error) {
      setError('Login Failed');
    }
  };

  return (
    <div className='wrapper'>
      <form action='' onSubmit={handleSubmit}>
        <h5>CRM Login</h5>

        <div className='input-box'>
          <input
            type='email'
            name='email'
            placeholder='Enter your Email'
            required
            onChange={handleChange}
          />
        </div>
        <div className='input-box'>
          <input
            type='password'
            name='password'
            placeholder='Enter Your Password'
            required
            onChange={handleChange}
          />
        </div>

        <div className='forgot-password'>
          <a href='#'>Forget password?</a>
        </div>

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
