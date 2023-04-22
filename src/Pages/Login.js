import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../Redux/reducers/login';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const handleLogin = () => {
    if (!username.trim()) {
      return toast.error('Please enter a username');
    }

    if (!password.trim()) {
      return toast.error('Please enter a password');
    }

    const user = users[username];
    if (!user) {
      return toast.error('User not found');
    }

    if (users[username] !== password) {
      return toast.error('Incorrect password');
    }

    dispatch(loginUser(username));
    toast.success('Logged in successfully!');
    navigate('/');
    // Redirect to home page
  }

  return (
    <div className="login">
      <div>
        <label className="login__label">Username:</label>
        <input className="login__input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label className="login__label">Password:</label>
        <input className="login__input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="login__button" onClick={handleLogin}>Login</button>
      <NavLink className="login__link" to="/register">
        Register
      </NavLink>
    </div>
  );
}

export default Login;
