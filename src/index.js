import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Create a root element using createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render your app component inside the root element
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
