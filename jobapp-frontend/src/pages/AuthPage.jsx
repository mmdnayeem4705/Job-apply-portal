import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './AuthPage.css'; // We'll create this next
import 'bootstrap/dist/css/bootstrap.min.css';

const bgUrl = "https://www.handdy.com/static/89af0d60293f6ed11576bfc5601fcd64/e5fac/How-do-Employees-Benefit-from-Employee-Monitoring-Software.jpg";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    role: 'applicant'
  });
  const navigate = useNavigate();

  const handleLoginChange = e => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleRegisterChange = e => setRegisterData({ ...registerData, [e.target.name]: e.target.value });

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', loginData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      alert('Login successful!');
      navigate('/');
    } catch (err) {
      alert('Login failed. ' + err.response?.data?.message);
    }
  };

  const handleRegister = async e => {
    e.preventDefault();
    try {
      await api.post('/auth/register', registerData);
      alert('Registered Successfully! Login now.');
      setIsLogin(true);
    } catch (err) {
      alert('Registration failed. ' + err.response?.data?.message);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="card p-4" style={{ minWidth: 350, maxWidth: 400, boxShadow: '0 0 10px #0007' }}>
        <div className="text-center mb-3">
          <button
            className={`btn btn-link ${isLogin ? 'fw-bold text-primary' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <span> | </span>
          <button
            className={`btn btn-link ${!isLogin ? 'fw-bold text-primary' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>
        {isLogin ? (
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="form-group mb-4">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <div className="form-group mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                name="fullName"
                value={registerData.fullName}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label>Role</label>
              <select
                name="role"
                className="form-control"
                value={registerData.role}
                onChange={handleRegisterChange}
              >
                <option value="applicant">Applicant</option>
                <option value="hr">HR</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button className="btn btn-primary w-100">Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
