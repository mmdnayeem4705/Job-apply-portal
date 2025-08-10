import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const featuredCompanies = [
  { name: "FIS", desc: "Global leader in financial services technology." },
  { name: "Apple", desc: "Join us. Be you." },
  { name: "Empower", desc: "We’re a financial services company." },
  { name: "Amgen Inc", desc: "LIVE. WIN. THRIVE." },
  { name: "Persistent", desc: "Trusted global solutions company." },
  { name: "Genpact", desc: "Global professional services firm." }
];

const Jobs = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate('/dashboard');
  };

  // State for search fields
  const [search, setSearch] = useState({
    query: '',
    experience: '',
    location: ''
  });

  // Handler for input changes
  const handleChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  // Handler for search button (implement actual search logic as needed)
  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Add search/filter logic here
  };

  return (
    <div className="container mt-4">
      {/* Search */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="card shadow p-4">
            <form onSubmit={handleSearch}>
              <div className="mb-3">
                <input
                  type="text"
                  name="query"
                  placeholder="Enter skills / designations / companies"
                  value={search.query}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <select
                  name="experience"
                  value={search.experience}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="">Select experience</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-3">1-3 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="5+">5+ years</option>
                </select>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  value={search.location}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="mb-4">
        <h4>Popular categories</h4>
        <div className="row">
          {["IT jobs", "Sales jobs", "Marketing jobs", "Data Science jobs", "HR jobs", "Engineering jobs"].map(cat => (
            <div className="col-md-2 mb-2" key={cat}>
              <div className="card text-center p-2">{cat}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Jobs in Demand */}
      <div className="mb-4">
        <h4>Jobs in demand</h4>
        <div className="row">
          {["Fresher jobs", "MNC jobs", "Remote jobs", "Work from home jobs", "Walk-in jobs", "Part-time jobs"].map(cat => (
            <div className="col-md-2 mb-2" key={cat}>
              <div className="card text-center p-2">{cat}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Jobs by Location */}
      <div className="mb-4">
        <h4>Jobs by location</h4>
        <div className="row">
          {["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune"].map(loc => (
            <div className="col-md-2 mb-2" key={loc}>
              <div className="card text-center p-2">Jobs in {loc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Companies */}
      <div className="mb-4">
        <h4>Top companies hiring now</h4>
        <div className="row">
          {["MNCs", "Internet", "Manufacturing", "Fortune 500", "Product", "Banking & Finance"].map(comp => (
            <div className="col-md-2 mb-2" key={comp}>
              <div className="card text-center p-2">{comp}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Companies */}
      <div className="mb-4">
        <h4>Featured companies actively hiring</h4>
        <div className="row">
          {featuredCompanies.map(comp => (
            <div className="col-md-4 mb-2" key={comp.name}>
              <div className="card p-2">
                <strong>{comp.name}</strong>
                <div className="small">{comp.desc}</div>
                <button className="btn btn-link p-0">View jobs</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="mb-4">
        <h4>Services</h4>
        <div className="row">
          {["Resume writing", "Text resume", "Visual resume", "Resume critique", "Jobs4u", "Priority applicant", "Resume display"].map(service => (
            <div className="col-md-2 mb-2" key={service}>
              <div className="card text-center p-2">{service}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Now button */}
      <div className="text-center mb-4">
        <button className="btn btn-success btn-lg" onClick={handleApplyNow}>
          Apply Now
        </button>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 mb-3 bg-dark text-light py-3 rounded">
        <small>
          @all rights are preserved by the Neo organization
        </small>
      </footer>
    </div>
  );
};

export default Jobs;
