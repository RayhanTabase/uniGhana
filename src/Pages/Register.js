import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { addUser } from '../Redux/reducers/users';
import './Register.css';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { users } = useSelector((state) => state.users);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username.length < 4) {
      setErrorMessage('Username must be at least 4 characters long');
      return;
    }

    if (users[username]) {
      setErrorMessage('Username already exists');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    dispatch(addUser({ username, password }));
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register User</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} className="form-input" />
        </div>
        {errorMessage && <div className="error">{errorMessage}</div>}
        <button type="submit" className="register-button">Register</button>
      </form>
      <div className="register-link-container">
        <span className="register-link-label">Already have an account?</span>
        <NavLink to="/login" className="register-link">Login</NavLink>
      </div>
    </div>
  );
}

export default Register;
