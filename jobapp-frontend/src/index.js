import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ Make sure App.js or App.jsx exists in the same folder
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
