import React, { useState } from 'react';
import './Banner.css';
import Login from './Login';

//Top row that includes the Log In button and title/logo
function Banner() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  }

  const handleLoginFormSubmit = (email, password) => {
    // Add logic to validate email and password, and perform login
    // For demonstration purposes, we'll just log the email and password to the console
    console.log('Email:', email);
    console.log('Password:', password);
    setLoggedIn(true);
    setShowLoginForm(false);
  }

  return (
    <div className='banner'>
      <h2 className='title'>Hawks Depth Chart</h2>
      {!loggedIn ? (
        <React.Fragment>
          <button className='login' onClick={handleLoginClick}>Log In</button>
          {showLoginForm && (
            <Login onLoginFormSubmit={handleLoginFormSubmit} onCancel={() => setShowLoginForm(false)} />
          )}
        </React.Fragment>
      ) : (
        <span className='logged-in'>Logged In</span>
      )}
    </div>
  );
}

export default Banner;

