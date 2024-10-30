import React, { useState } from 'react';
import "./Form.css"
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/action/actionstypes';
import { useNavigate } from 'react-router-dom';

function Form() {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
  const [attemptedSignIn, setAttemptedSignIn] = useState("");
  const [errorMes, setErrorMes] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
		event.preventDefault();
		setAttemptedSignIn(true);
    navigate("/User")

		const credentials = { email, password };
		const error = await dispatch(loginUser(credentials));
    if (error) {
      setErrorMes(error);
    } else {
      navigate("/User");
    }
  
	};

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password}
        onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">Sign In</button>
      { errorMes && attemptedSignIn && ( 
      <div className='error-msg'>{errorMes}</div>
    )}
    </form>
  )
}

export default Form
