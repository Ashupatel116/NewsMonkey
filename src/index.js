import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Custom styles
import 'bootstrap/dist/css/bootstrap.min.css'; // ✅ Bootstrap styles
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // ✅ Bootstrap JavaScript
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance (optional)
reportWebVitals();
