import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CssBaseline />
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </>,
);
