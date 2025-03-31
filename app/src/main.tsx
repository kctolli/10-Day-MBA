import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.tsx';

import './index.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route index element={<App />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
