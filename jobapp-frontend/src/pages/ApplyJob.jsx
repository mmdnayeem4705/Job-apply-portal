import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

const ApplyJob = () => {
  const { jobId } = useParams();
  const [resume, setResume] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/jobs/${jobId}/apply`, { resume });
      alert('Application submitted successfully!');
    } catch (err) {
      alert('Failed to apply. ' + err.response?.data?.message);
    }
  };

  return (
    <div className="container mt-4">
      <h3>Apply to Job ID: {jobId}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label>Resume Summary</label>
          <textarea
            className="form-control"
            rows="5"
            value={resume}
            onChange={e => setResume(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-success">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyJob;
