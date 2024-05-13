// index.js (or App.js)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './auth'; // Import AuthProvider
import App from './App'; // Your main application component

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider> {/* Wrap your entire application with AuthProvider */}
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
