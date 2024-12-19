import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/LandingPage.css';
// filepath: /c:/react/eli/english-courses-app/src/index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);