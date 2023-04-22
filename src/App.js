import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import NoMatch from './Pages/NoMatch';
import Navigation from './Components/Navbar';

function ProtectedRoute() {
  const { currentUser } = useSelector((state) => state.login);
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

function ProtectedRouteLog() {
  const { currentUser } = useSelector((state) => state.login);
  
  if (!currentUser) {
    return <Outlet />;
  } else {
    toast.error('You are already logged in');
    return <Navigate to="/" />;
  }
}

function App() {
  return (
    <Router>
      <Navigation />
      <ToastContainer position="top-center" theme="colored" />
      <Routes>
        <Route exact path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route exact path="/" element={<ProtectedRouteLog />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
}

export default App;
