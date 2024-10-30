import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/argentBankLogo.webp';
import { FaSignOutAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import './Header.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/action/actionstypes';

function Header() {
  const userName = useSelector((state)  => state.user.userData.userName);
  const isSignIn = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandlesignOut = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/")
  }
  console.log('isSignIn:', isSignIn);
  console.log('userName:', userName);

  return (
    <nav className='main-nav'>
      <Link className='main-nav-logo' to="/"><img className='main-nav-logo-image'src={Logo} alt='Logo'/>
      <h1 className='sr-only'>Argent Bank</h1></Link>
      {isSignIn ? (
        <div className='main-menu'>
          <Link className='main-nav-item' to='/User'>
            <FaUserCircle  className='fa fa-user-circle' aria-hidden="true"/>
            <p>{userName || "User"}</p>
          </Link>
          <Link className='main-nav-item' to="/"  onClick={HandlesignOut}>
            <FaSignOutAlt className='fa fa-sign-out' aria-hidden="true"/>
            <p>Sign Out</p>
          </Link>
        </div>
      ) : (
        <div className='main-menu'>
          <Link className='main-nav-item' to='/Login'>
            <FaUserCircle className='fa fa-user-circle' aria-hidden="true"/>
            <p>Sign In</p>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Header