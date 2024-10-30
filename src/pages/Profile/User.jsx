import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import ProfileContent from '../../components/Profilecontent/Profilecontent';
import { fetchUserProfile, updateProfile } from '../../redux/action/actionstypes'; 
import "./User.css";

function User() { 
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(true);
  const [userName, setUserName] = useState("");
  const userData = useSelector(state => state.user.userData); 

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (!display) {
      setUserName(userData.userName || "");
    }
  }, [display, userData.userName]);

  const handleSubmitUsername = (event) => {
    event.preventDefault();
    const profileData = { userName };
    console.log("profileData");
    dispatch(updateProfile(profileData)); 
    setDisplay(true); 
    
  
  };
  const toggleEditMode = () => {
    setDisplay(!display);
  };

  return (
    <div className='usersaccount'>
      <div className='editname'>
        {display ? (
          <>
            <h1 className='editnameh1'>
              Welcome back,
              <br />
              {userData?.firstName} {userData?.lastName}!
            </h1>
            <button 
              className='editnamebutton' 
              onClick={toggleEditMode}
            >
              Edit name
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmitUsername}>
            <div className="input-wrapper">
              <label htmlFor="userName">New Username</label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <button type="submit">Update Username</button>
            <button type="button" onClick={toggleEditMode}>
              Cancel
            </button>
          </form>
        )}
      </div>
      <ProfileContent />
    </div>
  );
}

export default User;