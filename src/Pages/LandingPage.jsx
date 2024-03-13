import React from 'react';
import './LandingPage.css';
import company_logo from '../Assets/logo/hyperial_logo.png';
import company_logo_2 from '../Assets/logo/hyperial_logo_only.png';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="wrapper">
        <div className="logo">
          <img src={company_logo} alt="hyperial_logo" className="logo"/>
        </div>
        
        <div className="container">
          <div className="login-form">
            <div className="login-form-logo">
              <img src={company_logo_2} alt="hyperial_logo" className="login-form-logo"/>
            </div>
            <h2>Log in to your account</h2>
            <h3>Welcome back! Please enter your details</h3>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
            <div className="forgot-password">Forgot Password?<span>Click Here!</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;