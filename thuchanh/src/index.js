import React from 'react';
import ReactDOM from 'react-dom/client';  // Import từ 'react-dom/client'
import './index.css';
import App from './App';


// Tạo root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render ứng dụng vào root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
