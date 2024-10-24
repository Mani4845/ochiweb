import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Correctly referencing App.jsx in the same folder
import './index.css';        // Correctly referencing index.css in the same folder

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

