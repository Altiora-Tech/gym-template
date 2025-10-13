
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import './src/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
// Apply base styles to the root element
rootElement.className = 'min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-colors duration-300';

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
