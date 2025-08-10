import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role'); // 'admin', 'hr', or 'applicant'

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <nav
      className="navbar navbar-expand-lg px-4 sticky-top"
      style={{
        backgroundColor: '#007bff',
        color: '#fff',
        fontWeight: 'bold'
      }}
    >
      <Link
        className="navbar-brand d-flex align-items-center"
        to="/"
        style={{ color: '#fff', fontWeight: 'bold' }}
      >
        <img
          src="https://e7.pngegg.com/pngimages/193/776/png-clipart-red-and-multicolored-bird-hummingbird-logo-drawing-others-miscellaneous-blue-thumbnail.png"
          alt="Neo Logo"
          style={{ height: 32, width: 32, marginRight: 8 }}
        />
        Neo Organization
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto d-flex align-items-center">
          {!role && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: '#fff', fontWeight: 'bold' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jobs" style={{ color: '#fff', fontWeight: 'bold' }}>Jobs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/companies" style={{ color: '#fff', fontWeight: 'bold' }}>Companies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/internships" style={{ color: '#fff', fontWeight: 'bold' }}>Internships</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses" style={{ color: '#fff', fontWeight: 'bold' }}>Courses</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: '#fff', fontWeight: 'bold' }}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login" style={{ color: '#fff', fontWeight: 'bold' }}>
                  <span className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" viewBox="0 0 16 16">
                      <path d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37c.69-1.19 2.066-2.37 5.468-2.37s4.778 1.18 5.468 2.37A7 7 0 0 0 8 1z"/>
                    </svg>
                  </span>
                </Link>
              </li>
            </>
          )}
          {role === 'applicant' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard" style={{ color: '#fff', fontWeight: 'bold' }}>Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{ color: '#fff', fontWeight: 'bold' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/jobs" style={{ color: '#fff', fontWeight: 'bold' }}>Jobs</Link>
              </li>
            </>
          )}
          {role === 'hr' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/post-job" style={{ color: '#fff', fontWeight: 'bold' }}>Post Job</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard" style={{ color: '#fff', fontWeight: 'bold' }}>Dashboard</Link>
              </li>
            </>
          )}
          {role === 'admin' && (
            <li className="nav-item">
              <Link className="nav-link" to="/admin" style={{ color: '#fff', fontWeight: 'bold' }}>Admin Panel</Link>
            </li>
          )}
          {role && (
            <li className="nav-item ms-3">
              <button className="btn btn-outline-light" style={{ fontWeight: 'bold' }} onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
