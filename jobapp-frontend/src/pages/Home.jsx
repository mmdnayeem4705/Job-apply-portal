import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/dashboard');
  };

  return (
    <div className="container mt-5 text-center" style={{ minHeight: '100vh', position: 'relative', paddingBottom: '60px' }}>
      <h1>Find your dream job now</h1>
      <h5>5 lakh+ jobs for you to explore.</h5>
      <button className="btn btn-success mb-3" onClick={handleApplyNow}>
        Apply Now
      </button>
      <footer
        className="text-center"
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          background: '#007bff',
          padding: '10px 0',
          zIndex: 100
        }}
      >
        <small style={{ color: '#fff', fontWeight: 'bold' }}>
          @all rights are preserved by the Neo Organization
        </small>
      </footer>
    </div>
  );
};

export default Home;