import React, { useState } from "react";
import './Login.css';

import User from '../Images/person.png';
import Email from '../Images/email.png';
import Password from '../Images/password.png';

const Login = () => {
  const [action, setAction] = useState("Sign Up");  // Default action is "Sign Up"

  return (
    <div className="log-container">
      <div className="log-header">
        <div className="log-text">{action}</div> {/* Correct class name */}
        <div className="underline"></div>
      </div>

      <div className="log-inputs">
        {/* Render Username input only if action is "Sign Up" */}
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

      {/* Show forgot password only for "Login" action */}
      {action === "Login" && (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        {/* Button to switch between Sign Up and Login */}
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
