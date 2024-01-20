import React from "react";
import "./LoginForm.css"; // Import the CSS file

const LoginForm = () => {
  return (
    <div className="login-form">
      <h3 className="login-heading">Log In</h3>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
