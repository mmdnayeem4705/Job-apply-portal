import React, { useEffect, useState } from 'react';
import api from '../services/api';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/admin/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Failed to fetch users:', err));
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h2>Admin Panel – All Registered Users</h2>
        <table className="table table-bordered mt-3">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr key={idx}>
                <td>{u.id}</td>
                <td>{u.fullName}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
          @all rights are preserved by the Neo organization
        </small>
      </footer>
    </>
  );
};

export default AdminPanel;
