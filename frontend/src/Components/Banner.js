import React, { useState } from 'react';
import './Banner.css';
import Login from './Login';

//Top row that includes the Log In button and title/logo
function Banner(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    if (props.isLoggedIn) {
        setShowLoginForm(false);
    } else {
        setShowLoginForm(true);
    }
  }

  const handleLoginFormSubmit = (email, password) => {
    // Add logic to validate email and password, and perform login
    // For demonstration purposes, we'll just log the email and password to the console
    console.log('Email:', email);
    console.log('Password:', password);
    setLoggedIn(true);
    setShowLoginForm(false);
    props.handleClick();
  }

  return (
    <div className='banner'>
      <h2 className='title'>Hawks Depth Chart</h2>
      {!props.isLoggedIn ? (
        <React.Fragment>
          <button className='login' onClick={handleLoginClick}>Log In</button>
          {showLoginForm && (
            <Login onLoginFormSubmit={handleLoginFormSubmit} onCancel={() => setShowLoginForm(false)} />
          )}
        </React.Fragment>
      ) : (
        <button className='login' onClick={props.handleClick}>Log Out</button>
      )}
    </div>
  );
}

export default Banner;








/*import './Banner.css'

//Top row that includes the Log In button and title/logo


function Banner(props) {
    let admin = props.isLoggedIn;
    let logInText ="";
    if (!admin) logInText = "Log In";
    if (admin) logInText = "Log Out";
   // if (!admin)  {
    return(
    <div className='banner'>
        <h2 className='title'>Hawks Roster</h2>
        <button onClick={props.handleClick} className='login'>{logInText}</button>
    </div>
    );
}

export default Banner; */
