import React from 'react'
  import  { useState } from 'react'
  function Adduser() {
        const [data,setdata]=useState({
              name:"",
              email:"",
              password:"",
              phone:"",
              nationality:"",
              dateOfBirth:""
  
        })
  
        const[gender,setGender]=useState("")
        function handleSubmit(event)
              {
                    event.preventDefault();
                    if(!data.name ||!data.email|| !data.dateOfBirth|| 
                          !data.nationality ||!data.dateOfBirth ||!gender)
                    {
                          alert("All Fields Are Required");
  
                    }
              }
        
    return (
      <>
      <h2>Add Admin</h2>
      <div>
        <form action="" onSubmit={handleSubmit}>
              <div>
              <Label>User_Fullname :</Label>
              <input type="text" placeholder='Full_Name*' value={data.name} onChange={()=>{setdata(data.name.target.value)}}/>
              </div>
              <div>
              <Label>User_Email :</Label>
              <input type="email" placeholder='Email*' value={data.email} onChange={()=>{setdata(data.email.target.value)}}/>
              </div>
               <div>
              <Label>Phone_Number :</Label>
              <input type="number" placeholder='Phone_Number*' value={data.phone} onChange={()=>{setdata(data.phone.target.value)}}/>
              </div>
               <div>
              <Label>Password:</Label>
              <input type="password" placeholder='Password*' value={data.password} onChange={()=>{setdata(data.password.target.value)}}/>
              </div>
              <div>
              <Label>Date_Of_Birth :</Label>
              <input type="datelocal" value={data.dateOfBirth} onChange={()=>{setdata(data.dateOfBirth.target.value)}} />
              </div>
              <div>
              <Label>Nationality :</Label>
              <select name="" id="" value={data.nationality} onChange={()=>{setdata(data.nationality.target.value)}}>
                    <option value="">Lebanon</option>
                    <option value="">France</option>
                    <option value="">Iraq</option>
                    <option value="">Germany</option>
                    <option value="">Turkey</option>
                    <option value="">Japan</option>
                    <option value="">China</option>
                    <option value="">Kuwait</option>
                    <option value="">Qatar</option>
                    <option value="">Other</option>
              </select>
              </div>
              <div>
              <Label>Gerder :</Label>
              <input type="radiobox" name='gender'  value={gender} 
              onChange={()=>{setGender(gender.target.value)}} /> 
              <label htmlFor="">Male</label>
              <input type="radiobox" name='gender' onChange={()=>
                    {setGender(gender.target.value)}} /> 
                    <label htmlFor="">Female</label>
  
              </div>
        </form>
      </div>
      </>
    )
  }
  
export default Adduser
