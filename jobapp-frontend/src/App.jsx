import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ApplyJob from './pages/ApplyJob';
import PostJob from './pages/PostJob';
import AdminPanel from './pages/AdminPanel';
import Jobs from './pages/Jobs';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />

        {/* Protected Routes (you can wrap them later with <ProtectedRoute>) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
