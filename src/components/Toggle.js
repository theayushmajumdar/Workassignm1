import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Toggle.css"

function PasswordToggler({ developer }) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <h1>Password Toggler</h1>
      <div className="input-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          className="password-input"
        />
        <button className="toggle-btn" onClick={handleTogglePasswordVisibility}>
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <footer className="footer">
        Developed with love by{" "}
        <a
          href={developer.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          {developer.name}
        </a>{" "}
        using React component
      </footer>
    </div>
  );
}

PasswordToggler.propTypes = {
  developer: PropTypes.shape({
    name: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
  }).isRequired,
};

export default PasswordToggler;
