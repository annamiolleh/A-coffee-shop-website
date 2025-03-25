import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App' // импорт
import './scss/reset.scss'
import './scss/main.scss'


const app = ReactDOMClient.createRoot(document.getElementById("root"));

app.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);