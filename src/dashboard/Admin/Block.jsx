import React from 'react'

function Block() {
  return (
    <>
    <div><h2>Block User</h2></div>
    <form action="">
      <div>
            <label htmlFor="">Admin_Name :</label>
            <input type="text" />
      </div>
      <div>
            <label htmlFor="">Email :</label>
            <input type="email" />
      </div>
      <div>
            <label htmlFor="">The cause of the block  </label>
            <textarea cols={3} rows={6}/>
      </div>
    </form>
      
    </>
  )
}

export default Block
