import React from 'react'
import './block.css'
import Header from './UserLayout/Header'
function Block() {
  return (
    <>
    <div className="block-container">
      <h2 className="block-title">Block User</h2>

    <form action="" className="block-form">
      <div>
            <label htmlFor="">Admin_Name :</label>
            <input type="text" />
      </div>
      <div>
            <label htmlFor="">Email :</label>
            <input type="email" />
      </div>
        <div>
          <label>The cause of the block</label>
          <textarea cols={3} rows={6}></textarea>
        </div>

        <button type="submit">Block User</button>
      </form>
    </div>
      
    </>
  )
}

export default Block
