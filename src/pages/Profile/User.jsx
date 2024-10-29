import React from 'react';
import Profilecontent from '../../components/Profilecontent/Profilecontent';
import "./User.css"

function User() {

  return (
    <div className='usersaccount'>
      <div className='editname'>
        <h1 className='editnameh1'>Welcome back<br />Name</h1>
        <button className='editnamebutton'>Edit name</button>
      </div>
      <Profilecontent />
    </div>
  )
}

export default User