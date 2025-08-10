import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get('/jobs')
      .then(res => setJobs(res.data))
      .catch(err => console.error('Failed to fetch jobs:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Available Jobs</h2>
      <div className="row">
        {jobs.map(job => (
          <div key={job.id} className="col-md-6 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text">{job.description}</p>
                <Link to={`/apply/${job.id}`} className="btn btn-primary">Apply</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
