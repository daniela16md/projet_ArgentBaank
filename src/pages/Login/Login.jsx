import React from 'react';
import './Login.css';
import Form from '../../containers/Form/Form'
import { FaUserCircle } from "react-icons/fa";

function Login() {
  return (
    <div className='main bg-dark'>
      <section className="sign-in-content">
        <FaUserCircle className="fa-solid fa-user-circle sign-in-icon"/>
        <h1 className='loginh1'>Sign In</h1>
        <Form/>
      </section>
    </div>
  )
}

export default Login