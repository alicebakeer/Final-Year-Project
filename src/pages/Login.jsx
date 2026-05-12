import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
        navigate('/');
    };

  return (
    <div className='container1'>
       <h1 className='head1'>
      <a href="/">Login</a>
      </h1>

  <form className='form1' onSubmit={handleSubmit}> 
 
    <label htmlFor="email">Email : </label>
    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/><br/>
    <label htmlFor="password">Password : </label>
    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/><br/>
    <input type="submit" value="Login" className='btn' />
    </form>
    <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  )
}