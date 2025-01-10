import React, { useState } from "react";
import './Login.css';

import User from '../Images/person.png';
import Email from '../Images/email.png';
import Password from '../Images/password.png';

const Login = () => {
  const [action, setAction] = useState("Sign Up"); 

  return (
    <div className="log-container">
      <div className="log-header">
        <div className="log-text">{action}</div>
        <div className="underline"></div>
      </div>

      <div className="log-inputs">
        {action === "Sign Up" && (
          <div className="log-input">
            <img src={User} alt="User Icon" />
            <input type="text" placeholder="User Name" />
          </div>
        )}

        <div className="log-input">
          <img src={Email} alt="Email Icon" />
          <input type="email" placeholder="Email Id" />
        </div>

        <div className="log-input">
          <img src={Password} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>

      {action === "Login" && (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </div>
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
