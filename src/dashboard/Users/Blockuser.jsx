import React from 'react'
import { useState } from 'react'
function Blockuser() {
      const[name,setName]=useState('')
return (
       <>
       <div><h2>Block User</h2></div>
       <form action="">
         <div>
            <label htmlFor="">User_Name :</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
         </div>
         <div>
            <label htmlFor="">Email :</label>
            <input type="email" />
         </div>
         <div>
            <label htmlFor="">The cause of the block  </label>
            <textarea cols={3} rows={6}/>
         </div>
         <button type="submit">Save</button> 
         <button >Cancle</button>
       </form>
         
       </>
     )
   }


export default Blockuser
