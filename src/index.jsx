import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ArtProvider from './context/ArtProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ArtProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ArtProvider>,
);
