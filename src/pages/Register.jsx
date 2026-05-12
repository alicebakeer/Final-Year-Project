import React, { useState } from 'react'
import './register.css'
function Register({onLogin}) {
    const [errorText,setErrorText]=useState('')
  function handleChange(event) {
    const { name, value } = event.target;
    setData({
        ...data,
        [name]: value
    });
}
      function handleSubmit(event)
    {event.preventDefault()
        if(!data.Fname||!data.Lname||!data.Email||!data.phoneNbr||!data.password||!data.role)
        {
setErrorText('please fill all fields.')
return
        }
        setErrorText('')
        onLogin(data)
    }
    const [data,setData]=useState({
        Fname:'',
        Lname:'',
        Email:'',
       password:'',
        phoneNbr:'',
        role:''
})
  return (
    <>
    <div className='container1'>
    <h1 className='head1'>
      <a href="/">Register</a>
      </h1>
    <form action="" className='form1' onSubmit={handleSubmit}>
        <label htmlFor='Fname'>First Name :</label>
      <input type="text" placeholder='enter your name' name='Fname' required value={data.Fname} onChange={handleChange}/> <br/> <br/> 
          <label htmlFor='Lname'>Last Name :</label>
      <input type="text" placeholder='enter your last name' name='Lname' required value={data.Lname} onChange={handleChange}/> <br/> <br/>
          <label htmlFor='Email' id='email'>Email :</label>
      <input type="email" placeholder='enter your email' name='Email' required value={data.Email} onChange={handleChange}/> <br/> <br/>
          <label htmlFor='password'>Password :</label>
      <input type="password" placeholder='enter your password' name='password' required value={data.password} onChange={handleChange}/> <br/> <br/>
          <label  htmlFor='phoneNbr'id='phone'>Phone :</label>
      <input type="text"  placeholder='enter your phone number 'name='phoneNbr' required value={data.phoneNbr} onChange={handleChange}/> <br/> <br/>
      {/* <div className='option'> */}
      <label className='role'  htmlFor='role'>Role :</label>
        <select name="role"  value={data.role} onChange={handleChange} className='select1' >
            <option value="">Admin</option>
            <option value="">Super Admin</option>
        </select>
           
        {/* </div>  */}
        <br/> <br/>
        <div className="btns">
      <button type='submit' className='btn'>Submit</button>
        <button type='button' className='btn'>Back</button>
          </div> 
    </form>
    <p>Already have an account? <a href="/login">Login</a></p>
    </div>
    </>
  )
}

export default Register
