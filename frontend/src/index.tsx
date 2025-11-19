import React from 'react';
//cola o react no nav
import ReactDOM from 'react-dom/client';

//estilização
import './index.css';

//pro index saber oq renderizar
import App from './App';

//lugar onde todo o react vai ser injetado
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//renderização
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

