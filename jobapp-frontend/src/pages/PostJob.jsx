import React, { useState } from 'react';
import api from '../services/api';

const PostJob = () => {
  const [job, setJob] = useState({ title: '', description: '' });

  const handleChange = (e) => {
    setJob(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/jobs', job);
      alert('Job posted successfully!');
      setJob({ title: '', description: '' });
    } catch (err) {
      alert('Failed to post job. ' + err.response?.data?.message);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Post a New Job</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Job Title</label>
          <input type="text" className="form-control" name="title" value={job.title} onChange={handleChange} required />
        </div>

        <div className="form-group mb-3">
          <label>Description</label>
          <textarea className="form-control" name="description" rows="4" value={job.description} onChange={handleChange} required />
        </div>

        <button className="btn btn-primary">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
