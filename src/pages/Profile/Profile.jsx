import React from 'react';
import Profilecontent from '../../containers/Profilecontent/Profilecontent';

function Profile() {

  return (
    <div className='usersaccount'>
      <div className='editname'>
        <h1>Welcome back<br />Name</h1>
        <button className='editnamebutton'>Edit name</button>
      </div>
      <Profilecontent />
    </div>
  )
}

export default Profile