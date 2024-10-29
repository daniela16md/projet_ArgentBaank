import React, { useState } from 'react';
import "./Form.css"
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/action/actionstypes';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [email, setnewEmail] = useState("");
	const [password, setnewPassword] = useState("");
  const [signIn, setnewsignIn] = useState("");
  const [errorMes, setnewerrorMes] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
		event.preventDefault();
		setnewsignIn(true);
    navigate("/User")

		const credentials = { email, password };
		const error = await dispatch(loginUser(credentials, navigate));
    if (error) {
			setnewerrorMes(error); 
		}
  
	};

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={email}
        onChange={(e) => setnewEmail(e.target.value)}/>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password}
        onChange={(e) => setnewPassword(e.target.value)}/>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>
      { errorMes && signIn && ( 
      <div className='error-msg'>{errorMes}</div>
    )}
    </form>
  )
}

export default Form
